import { Component } from '@angular/core';
import { AuthService } from './auth/services/auth.service';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Category {
  name: string;
  path: string;
  icon: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatBadgeModule,
    MatInputModule,
    MatFormFieldModule,
    RouterModule
  ],
  template: `
    <header class="main-header">
      <div class="header-top">
        <div class="header-content">
          <a class="logo" routerLink="/">
            <h1>aldımgitti</h1>
          </a>

          <div class="search-container">
            <div class="search-box">
              <input type="text" placeholder="Aradığınız ürün, kategori veya markayı yazınız" [(ngModel)]="searchQuery">
              <button class="search-button">
                <mat-icon>search</mat-icon>
              </button>
            </div>
          </div>

          <div class="user-actions">
            <a class="user-action-link" routerLink="/profile">
              <mat-icon>person_outline</mat-icon>
              <span>Hesabım</span>
            </a>
            <a class="user-action-link" routerLink="/favorites">
              <mat-icon>favorite_border</mat-icon>
              <span>Favorilerim</span>
            </a>
            <a class="user-action-link cart" routerLink="/cart">
              <mat-icon [matBadge]="cartItemCount" matBadgeColor="warn">shopping_cart</mat-icon>
              <span>Sepetim</span>
            </a>
          </div>
        </div>
      </div>

      <nav class="main-nav">
        <div class="nav-content">
          <a class="nav-link" routerLink="/kadin" routerLinkActive="active">Kadın</a>
          <a class="nav-link" routerLink="/erkek" routerLinkActive="active">Erkek</a>
          <a class="nav-link" routerLink="/anne-cocuk" routerLinkActive="active">Anne & Çocuk</a>
          <a class="nav-link" routerLink="/ev-yasam" routerLinkActive="active">Ev & Yaşam</a>
          <a class="nav-link" routerLink="/supermarket" routerLinkActive="active">Süpermarket</a>
          <a class="nav-link" routerLink="/kozmetik" routerLinkActive="active">Kozmetik</a>
          <a class="nav-link" routerLink="/ayakkabi-canta" routerLinkActive="active">Ayakkabı & Çanta</a>
          <a class="nav-link" routerLink="/elektronik" routerLinkActive="active">Elektronik</a>
        </div>
      </nav>
    </header>

    <main class="content">
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [`
    .main-header {
      background: white;
      border-bottom: 1px solid #e5e5e5;
    }

    .header-top {
      border-bottom: 1px solid #e5e5e5;
      padding: 12px 0;
    }

    .header-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 16px;
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
      gap: 24px;
    }

    .logo {
      text-decoration: none;
    }

    .logo h1 {
      margin: 0;
      color: #ff6000;
      font-size: 24px;
      font-weight: bold;
    }

    .search-container {
      width: 100%;
      max-width: 700px;
      margin: 0 auto;
    }

    .search-box {
      display: flex;
      align-items: center;
      width: 100%;
      height: 40px;
      border: 2px solid #ff6000;
      border-radius: 4px;
      overflow: hidden;
    }

    .search-box input {
      flex: 1;
      height: 100%;
      padding: 0 16px;
      border: none;
      outline: none;
      font-size: 14px;
    }

    .search-button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 100%;
      background: #ff6000;
      border: none;
      cursor: pointer;
      color: white;
    }

    .user-actions {
      display: flex;
      gap: 24px;
      align-items: center;
    }

    .user-action-link {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-decoration: none;
      color: #333;
      font-size: 12px;
      gap: 4px;
    }

    .user-action-link mat-icon {
      font-size: 20px;
      height: 20px;
      width: 20px;
      color: #666;
    }

    .user-action-link.cart mat-icon {
      color: #ff6000;
    }

    .nav-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 16px;
      display: flex;
      justify-content: center;
      gap: 32px;
    }

    .nav-link {
      color: #333;
      text-decoration: none;
      font-size: 14px;
      font-weight: 500;
      padding: 12px 0;
      position: relative;
    }

    .nav-link.active {
      color: #ff6000;
    }

    .nav-link.active::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: #ff6000;
    }

    .content {
      max-width: 1200px;
      margin: 24px auto;
      padding: 0 16px;
    }

    ::ng-deep .mat-badge-content {
      background: #ff6000 !important;
      font-size: 10px !important;
      min-width: 16px !important;
      height: 16px !important;
      line-height: 16px !important;
    }
  `]
})
export class AppComponent {
  cartItemCount = 2;
  searchQuery = '';

  constructor(public authService: AuthService) {}
}
