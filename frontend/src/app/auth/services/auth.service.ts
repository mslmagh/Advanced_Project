import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from '../../../environments/environment';
import { isPlatformBrowser } from '@angular/common';

export interface User {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  roles: string[];
}

export interface RegisterRequest {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthResponse {
  message: string;
  user?: User;
  token?: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();
  private isBrowser: boolean;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    }),
    withCredentials: true
  };

  constructor(
    private http: HttpClient,
    private router: Router,
    @Inject(PLATFORM_ID) platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
    if (this.isBrowser) {
      const token = this.getToken();
      if (token) {
        this.loadUserFromToken(token);
      }
    }
  }

  register(userData: RegisterRequest): Observable<AuthResponse> {
    const url = `${environment.apiUrl}/api/auth/register`;
    console.log('Sending register request to:', url);
    console.log('Register data:', userData);
    
    return this.http.post<AuthResponse>(url, userData, this.httpOptions).pipe(
      tap({
        next: (response) => {
          console.log('Register success:', response);
          if (response.user) {
            this.currentUserSubject.next(response.user);
          }
        },
        error: (error) => {
          console.error('Register error:', error);
          if (error.error instanceof ErrorEvent) {
            // Client-side error
            console.error('Client-side error:', error.error.message);
          } else {
            // Backend error
            console.error(`Backend returned code ${error.status}, body was:`, error.error);
          }
        }
      })
    );
  }

  login(credentials: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${environment.apiUrl}/api/auth/login`, credentials, this.httpOptions)
      .pipe(
        tap({
          next: (response) => {
            if (response.token && response.user) {
              if (this.isBrowser) {
                localStorage.setItem('token', response.token);
              }
              this.currentUserSubject.next(response.user);
            }
          },
          error: (error) => console.error('Login error:', error)
        })
      );
  }

  logout(): void {
    if (this.isBrowser) {
      localStorage.removeItem('token');
    }
    this.currentUserSubject.next(null);
    this.router.navigate(['/auth/login']);
  }

  private getToken(): string | null {
    return this.isBrowser ? localStorage.getItem('token') : null;
  }

  private loadUserFromToken(token: string): void {
    this.http.get<User>(`${environment.apiUrl}/api/auth/me`, {
      headers: new HttpHeaders({
        'Authorization': `Bearer ${token}`
      }),
      withCredentials: true
    }).subscribe({
      next: (user) => this.currentUserSubject.next(user),
      error: () => {
        if (this.isBrowser) {
          localStorage.removeItem('token');
        }
        this.currentUserSubject.next(null);
      }
    });
  }
} 