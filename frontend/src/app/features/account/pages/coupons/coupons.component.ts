import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-coupons',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="coupons-container">
      <div class="coupons-header">
        <h1>İndirim Kuponlarım</h1>
      </div>

      <div class="coupons-content">
        <nav class="profile-nav">
          <a routerLink="/hesabim" routerLinkActive="active">
            Kullanıcı Bilgilerim
          </a>
          <a routerLink="/hesabim/siparislerim" routerLinkActive="active">
            Siparişlerim
          </a>
          <a routerLink="/hesabim/adreslerim" routerLinkActive="active">
            Adreslerim
          </a>
          <a routerLink="/hesabim/kuponlarim" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
            İndirim Kuponlarım
          </a>
        </nav>

        <div class="coupons-list">
          <!-- Content will be added later -->
        </div>
      </div>
    </div>
  `,
  styles: [`
    .coupons-container {
      padding: 24px;
    }

    .coupons-header {
      margin-bottom: 24px;
    }

    .coupons-header h1 {
      font-size: 24px;
      color: #333;
    }

    .coupons-content {
      display: grid;
      grid-template-columns: 250px 1fr;
      gap: 24px;
    }

    .profile-nav {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .profile-nav a {
      padding: 12px 16px;
      text-decoration: none;
      color: #666;
      border-radius: 8px;
      transition: all 0.3s;
    }

    .profile-nav a:hover {
      background: #f8f8f8;
    }

    .profile-nav a.active {
      background: #f27a1a;
      color: white;
    }

    .coupons-list {
      background: white;
      padding: 24px;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }
  `]
})
export class CouponsComponent {} 