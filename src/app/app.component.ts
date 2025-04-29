import { Component } from '@angular/core';
import { AuthService } from './auth/services/auth.service';

@Component({
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary">
      <button mat-icon-button [matMenuTriggerFor]="menu">
        <mat-icon>menu</mat-icon>
      </button>
      <span>E-Ticaret Platformu</span>
      <span class="spacer"></span>
      
      <ng-container *ngIf="authService.currentUserValue; else loginButton">
        <button mat-icon-button routerLink="/cart" *ngIf="authService.hasRole('customer')">
          <mat-icon [matBadge]="cartItemCount" matBadgeColor="warn">shopping_cart</mat-icon>
        </button>
        <button mat-button [matMenuTriggerFor]="userMenu">
          {{ authService.currentUserValue.fullName }}
          <mat-icon>arrow_drop_down</mat-icon>
        </button>
      </ng-container>
      
      <ng-template #loginButton>
        <button mat-button routerLink="/auth/login">Giriş Yap</button>
      </ng-template>
    </mat-toolbar>

    <mat-menu #menu="matMenu">
      <button mat-menu-item routerLink="/products">
        <mat-icon>store</mat-icon>
        <span>Ürünler</span>
      </button>
      <button mat-menu-item routerLink="/cart" *ngIf="authService.hasRole('customer')">
        <mat-icon>shopping_cart</mat-icon>
        <span>Sepetim</span>
      </button>
      <button mat-menu-item routerLink="/orders" *ngIf="authService.currentUserValue">
        <mat-icon>receipt</mat-icon>
        <span>Siparişlerim</span>
      </button>
      <button mat-menu-item routerLink="/seller" *ngIf="authService.hasRole('seller')">
        <mat-icon>store_manager</mat-icon>
        <span>Satıcı Paneli</span>
      </button>
      <button mat-menu-item routerLink="/admin" *ngIf="authService.hasRole('admin')">
        <mat-icon>admin_panel_settings</mat-icon>
        <span>Yönetici Paneli</span>
      </button>
    </mat-menu>

    <mat-menu #userMenu="matMenu">
      <button mat-menu-item routerLink="/profile">
        <mat-icon>person</mat-icon>
        <span>Profilim</span>
      </button>
      <button mat-menu-item (click)="authService.logout()">
        <mat-icon>exit_to_app</mat-icon>
        <span>Çıkış Yap</span>
      </button>
    </mat-menu>

    <div class="content">
      <router-outlet></router-outlet>
    </div>
  `,
  styles: [`
    .spacer {
      flex: 1 1 auto;
    }
    .content {
      padding: 20px;
      max-width: 1200px;
      margin: 0 auto;
    }
    mat-toolbar {
      position: sticky;
      top: 0;
      z-index: 1000;
    }
  `]
})
export class AppComponent {
  cartItemCount = 0; // This should be updated from a CartService

  constructor(public authService: AuthService) {}
}
