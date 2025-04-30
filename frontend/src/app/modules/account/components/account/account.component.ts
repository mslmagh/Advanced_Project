import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatTabsModule, MatIconModule, MatButtonModule],
  template: `
    <div class="account-container">
      <h1>Hesabım</h1>
      <mat-tab-group>
        <mat-tab label="Siparişlerim">
          <mat-card>
            <mat-card-content>
              <h2>Siparişlerim</h2>
              <p *ngIf="!orders?.length">Henüz siparişiniz bulunmamaktadır.</p>
            </mat-card-content>
          </mat-card>
        </mat-tab>

        <mat-tab label="Bilgilerim">
          <mat-card>
            <mat-card-content>
              <h2>Kişisel Bilgilerim</h2>
              <div class="profile-info">
                <p><strong>Ad Soyad:</strong> {{userInfo.name}}</p>
                <p><strong>E-posta:</strong> {{userInfo.email}}</p>
                <p><strong>Telefon:</strong> {{userInfo.phone}}</p>
              </div>
              <button mat-raised-button color="primary">Bilgilerimi Güncelle</button>
            </mat-card-content>
          </mat-card>
        </mat-tab>

        <mat-tab label="Adreslerim">
          <mat-card>
            <mat-card-content>
              <h2>Kayıtlı Adreslerim</h2>
              <p *ngIf="!addresses?.length">Henüz kayıtlı adresiniz bulunmamaktadır.</p>
              <button mat-raised-button color="primary">Yeni Adres Ekle</button>
            </mat-card-content>
          </mat-card>
        </mat-tab>
      </mat-tab-group>
    </div>
  `,
  styles: [`
    .account-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 24px;
    }

    h1 {
      margin-bottom: 24px;
      color: #333;
    }

    mat-card {
      margin: 16px 0;
    }

    .profile-info {
      margin: 16px 0;
    }

    .profile-info p {
      margin: 8px 0;
    }

    button {
      margin-top: 16px;
    }
  `]
})
export class AccountComponent {
  userInfo = {
    name: 'Kullanıcı Adı',
    email: 'kullanici@example.com',
    phone: '(555) 123-4567'
  };

  orders: any[] = [];
  addresses: any[] = [];
} 