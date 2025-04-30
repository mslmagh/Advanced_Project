import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthService,
    private snackBar: MatSnackBar
  ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (!this.authService.isAuthenticated()) {
      this.snackBar.open('Bu sayfaya erişmek için giriş yapmalısınız.', 'Kapat', {
        duration: 3000
      });
      this.router.navigate(['/auth/login'], { queryParams: { returnUrl: state.url }});
      return false;
    }

    // Check if route has data.roles and user has required role
    if (route.data['roles'] && !route.data['roles'].includes(this.authService.currentUserValue?.role)) {
      this.snackBar.open('Bu sayfaya erişim yetkiniz bulunmamaktadır.', 'Kapat', {
        duration: 3000
      });
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
} 