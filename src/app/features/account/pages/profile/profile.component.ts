import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="profile-container">
      <div class="profile-header">
        <h1>Hesabım</h1>
      </div>

      <div class="profile-content">
        <nav class="profile-nav">
          <a routerLink="/hesabim" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
            Kullanıcı Bilgilerim
          </a>
          <a routerLink="/hesabim/siparislerim" routerLinkActive="active">
            Siparişlerim
          </a>
          <a routerLink="/hesabim/adreslerim" routerLinkActive="active">
            Adreslerim
          </a>
          <a routerLink="/hesabim/kuponlarim" routerLinkActive="active">
            İndirim Kuponlarım
          </a>
        </nav>

        <div class="profile-details">
          <h2>Kullanıcı Bilgilerim</h2>
          <div class="form-group">
            <label>Ad Soyad</label>
            <input type="text" value="John Doe" readonly>
          </div>
          <div class="form-group">
            <label>E-posta</label>
            <input type="email" value="john@example.com" readonly>
          </div>
          <div class="form-group">
            <label>Telefon</label>
            <input type="tel" value="+90 555 123 4567" readonly>
          </div>
          <button class="edit-btn">Bilgilerimi Düzenle</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .profile-container {
      padding: 24px;
    }

    .profile-header {
      margin-bottom: 24px;
    }

    .profile-header h1 {
      font-size: 24px;
      color: #333;
    }

    .profile-content {
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

    .profile-details {
      background: white;
      padding: 24px;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    }

    .profile-details h2 {
      font-size: 20px;
      color: #333;
      margin-bottom: 24px;
    }

    .form-group {
      margin-bottom: 16px;
    }

    .form-group label {
      display: block;
      color: #666;
      margin-bottom: 8px;
    }

    .form-group input {
      width: 100%;
      padding: 12px;
      border: 1px solid #ddd;
      border-radius: 8px;
      font-size: 14px;
    }

    .edit-btn {
      background: #f27a1a;
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 8px;
      font-size: 14px;
      cursor: pointer;
      transition: background 0.3s;
    }

    .edit-btn:hover {
      background: #e16a09;
    }
  `]
})
export class ProfileComponent {} 