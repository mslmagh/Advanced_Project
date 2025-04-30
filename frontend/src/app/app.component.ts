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
import { FooterComponent } from './components/footer/footer.component';
import { RouterOutlet } from '@angular/router';

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
    RouterModule,
    FooterComponent,
    RouterOutlet
  ],
  template: `
    <header>
      <mat-toolbar class="top-toolbar">
        <a routerLink="/" class="logo">aldımgitti</a>
        <mat-form-field class="search-field" appearance="outline">
          <input matInput placeholder="Aradığınız ürün, kategori veya markayı yazınız" [(ngModel)]="searchQuery">
          <button mat-icon-button matSuffix>
            <mat-icon>search</mat-icon>
          </button>
        </mat-form-field>
        <div class="user-actions">
          <a mat-button routerLink="/hesabim">
            <mat-icon>person</mat-icon>
            Hesabım
          </a>
          <a mat-button routerLink="/favorilerim">
            <mat-icon>favorite_border</mat-icon>
            Favorilerim
          </a>
          <a mat-button routerLink="/sepetim">
            <mat-icon [matBadge]="cartItemCount" matBadgeColor="warn">shopping_cart</mat-icon>
            Sepetim
          </a>
        </div>
      </mat-toolbar>

      <mat-toolbar class="category-toolbar">
        <nav class="category-nav">
          <a mat-button routerLink="/kadin" routerLinkActive="active">Kadın</a>
          <a mat-button routerLink="/erkek" routerLinkActive="active">Erkek</a>
          <a mat-button routerLink="/anne-cocuk" routerLinkActive="active">Anne & Çocuk</a>
          <a mat-button routerLink="/ev-yasam" routerLinkActive="active">Ev & Yaşam</a>
          <a mat-button routerLink="/supermarket" routerLinkActive="active">Süpermarket</a>
          <a mat-button routerLink="/kozmetik" routerLinkActive="active">Kozmetik</a>
          <a mat-button routerLink="/ayakkabi-canta" routerLinkActive="active">Ayakkabı & Çanta</a>
          <a mat-button routerLink="/elektronik" routerLinkActive="active">Elektronik</a>
        </nav>
      </mat-toolbar>
    </header>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
  `,
  styles: [`
    .top-toolbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 16px;
      height: 72px;
      background-color: white;
      border-bottom: 1px solid #e5e5e5;
    }

    .logo {
      font-size: 24px;
      font-weight: bold;
      color: #ff6000;
      text-decoration: none;
      margin-right: 24px;
    }

    .search-field {
      flex: 1;
      max-width: 600px;
      margin: 0 24px;
    }

    .user-actions {
      display: flex;
      gap: 8px;
    }

    .user-actions a {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #333;
    }

    .user-actions mat-icon {
      margin-bottom: 4px;
    }

    .category-toolbar {
      height: 48px;
      background-color: white;
      border-bottom: 1px solid #e5e5e5;
      padding: 0 16px;
    }

    .category-nav {
      display: flex;
      gap: 16px;
      overflow-x: auto;
      width: 100%;
    }

    .category-nav a {
      color: #333;
      font-weight: 500;
      text-transform: none;
    }

    .category-nav a.active {
      color: #ff6000;
    }

    main {
      min-height: calc(100vh - 200px);
      padding: 20px;
    }

    @media (max-width: 768px) {
      .user-actions {
        display: none;
      }
      
      .search-field {
        max-width: none;
      }
    }
  `]
})
export class AppComponent {
  cartItemCount = 2;
  searchQuery = '';

  constructor(public authService: AuthService) {}
}
