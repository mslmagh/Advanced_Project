import { Injectable, PLATFORM_ID, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';
import { isPlatformBrowser } from '@angular/common';

export interface User {
  id: string;
  fullName: string;
  email: string;
  role: 'admin' | 'seller' | 'customer';
}

export interface AuthResponse {
  token: string;
  user: User;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject: BehaviorSubject<User | null>;
  public currentUser: Observable<User | null>;
  private jwtHelper: JwtHelperService = new JwtHelperService();

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.currentUserSubject = new BehaviorSubject<User | null>(null);
    this.currentUser = this.currentUserSubject.asObservable();
    this.initializeUser();
  }

  private initializeUser(): void {
    if (isPlatformBrowser(this.platformId)) {
      try {
        const storedUser = localStorage.getItem('currentUser');
        if (storedUser) {
          this.currentUserSubject.next(JSON.parse(storedUser));
        }
      } catch (e) {
        console.error('Error initializing user:', e);
      }
    }
  }

  public get currentUserValue(): User | null {
    return this.currentUserSubject.value;
  }

  login(email: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${environment.apiUrl}/auth/login`, { email, password })
      .pipe(
        tap(response => {
          if (isPlatformBrowser(this.platformId)) {
            try {
              localStorage.setItem('token', response.token);
              localStorage.setItem('currentUser', JSON.stringify(response.user));
            } catch (e) {
              console.error('Error storing auth data:', e);
            }
          }
          this.currentUserSubject.next(response.user);
        })
      );
  }

  register(userData: {
    fullName: string;
    email: string;
    password: string;
    role: 'customer' | 'seller';
  }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${environment.apiUrl}/auth/register`, userData)
      .pipe(
        tap(response => {
          if (isPlatformBrowser(this.platformId)) {
            try {
              localStorage.setItem('token', response.token);
              localStorage.setItem('currentUser', JSON.stringify(response.user));
            } catch (e) {
              console.error('Error storing auth data:', e);
            }
          }
          this.currentUserSubject.next(response.user);
        })
      );
  }

  logout(): void {
    if (isPlatformBrowser(this.platformId)) {
      try {
        localStorage.removeItem('token');
        localStorage.removeItem('currentUser');
      } catch (e) {
        console.error('Error clearing auth data:', e);
      }
    }
    this.currentUserSubject.next(null);
    this.router.navigate(['/auth/login']);
  }

  isAuthenticated(): boolean {
    if (!isPlatformBrowser(this.platformId)) return false;
    try {
      const token = localStorage.getItem('token');
      return token ? !this.jwtHelper.isTokenExpired(token) : false;
    } catch (e) {
      console.error('Error checking authentication:', e);
      return false;
    }
  }

  hasRole(role: string): boolean {
    const user = this.currentUserValue;
    return user ? user.role === role : false;
  }

  getToken(): string | null {
    if (!isPlatformBrowser(this.platformId)) return null;
    try {
      return localStorage.getItem('token');
    } catch (e) {
      console.error('Error getting token:', e);
      return null;
    }
  }
} 