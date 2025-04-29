import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-addresses',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="addresses-container">
      <div class="addresses-header">
        <h1>Adreslerim</h1>
      </div>

      <div class="addresses-content">
        <nav class="profile-nav">
          <a routerLink="/hesabim" routerLinkActive="active">
            Kullanıcı Bilgilerim
          </a>
          <a routerLink="/hesabim/siparislerim" routerLinkActive="active">
            Siparişlerim
          </a>
          <a routerLink="/hesabim/adreslerim" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
            Adreslerim
          </a>
          <a routerLink="/hesabim/kuponlarim" routerLinkActive="active">
            İndirim Kuponlarım
          </a>
        </nav>

        <div class="addresses-list">
          <!-- Content will be added later -->
          <button class="add-address-btn">Yeni Adres Ekle</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .addresses-container {
      padding: 24px;
    }

    .addresses-header {
      margin-bottom: 24px;
    }

    .addresses-header h1 {
      font-size: 24px;
      color: #333;
    }

    .addresses-content {
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

    .addresses-list {
      background: white;
      padding: 24px;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }

    .add-address-btn {
      background: #f27a1a;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 8px;
      font-size: 14px;
      cursor: pointer;
      transition: background 0.3s;
    }

    .add-address-btn:hover {
      background: #e16a09;
    }
  `]
})
export class AddressesComponent {} 