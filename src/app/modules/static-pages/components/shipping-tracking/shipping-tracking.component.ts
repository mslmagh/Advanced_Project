import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-shipping-tracking',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FormsModule
  ],
  template: `
    <div class="container">
      <mat-card class="tracking-card">
        <mat-card-header>
          <mat-card-title>Kargo Takip</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p class="intro-text">
            Siparişinizin durumunu takip etmek için sipariş numaranızı veya kargo takip numaranızı giriniz.
          </p>

          <form (ngSubmit)="trackShipment()" class="tracking-form">
            <mat-form-field appearance="outline" class="tracking-input">
              <mat-label>Sipariş No veya Kargo Takip No</mat-label>
              <input 
                matInput 
                [(ngModel)]="trackingNumber"
                name="trackingNumber"
                placeholder="Örn: 1234567890"
                required
              >
            </mat-form-field>

            <button 
              mat-raised-button 
              color="primary" 
              type="submit"
              [disabled]="!trackingNumber"
            >
              Kargo Durumunu Sorgula
            </button>
          </form>

          <div class="info-section">
            <h3>Kargo Takip Hakkında</h3>
            <ul>
              <li>
                Siparişiniz kargoya verildikten sonra takip numarası SMS ve e-posta yoluyla tarafınıza iletilecektir.
              </li>
              <li>
                Kargo takip numaranızı "Hesabım > Siparişlerim" bölümünden de görüntüleyebilirsiniz.
              </li>
              <li>
                Siparişinizin durumu ile ilgili güncel bilgileri bu sayfadan takip edebilirsiniz.
              </li>
            </ul>
          </div>

          <div class="shipping-partners">
            <h3>Anlaşmalı Kargo Firmaları</h3>
            <div class="partner-logos">
              <img src="assets/images/shipping/aras.png" alt="Aras Kargo">
              <img src="assets/images/shipping/yurtici.png" alt="Yurtiçi Kargo">
              <img src="assets/images/shipping/mng.png" alt="MNG Kargo">
              <img src="assets/images/shipping/ptt.png" alt="PTT Kargo">
            </div>
          </div>
        </mat-card-content>
      </mat-card>

      <mat-card *ngIf="trackingResult" class="result-card">
        <mat-card-header>
          <mat-card-title>Kargo Durumu</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <!-- Kargo takip sonuçları burada gösterilecek -->
          <p>{{ trackingResult }}</p>
        </mat-card-content>
      </mat-card>
    </div>
  `,
  styles: [`
    .container {
      max-width: 800px;
      margin: 32px auto;
      padding: 0 16px;
    }

    .tracking-card {
      margin-bottom: 24px;
    }

    mat-card-title {
      color: #333;
      font-size: 24px;
      margin-bottom: 24px;
    }

    .intro-text {
      color: #666;
      line-height: 1.6;
      margin-bottom: 24px;
    }

    .tracking-form {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 16px;
      margin-bottom: 32px;
    }

    .tracking-input {
      width: 100%;
      max-width: 400px;
    }

    button[color="primary"] {
      background-color: #ff6000;
      width: 100%;
      max-width: 400px;
    }

    .info-section {
      margin: 32px 0;
    }

    h3 {
      color: #333;
      font-size: 18px;
      margin-bottom: 16px;
    }

    ul {
      list-style-type: none;
      padding: 0;
    }

    li {
      color: #666;
      margin-bottom: 12px;
      padding-left: 20px;
      position: relative;
    }

    li:before {
      content: "•";
      color: #ff6000;
      position: absolute;
      left: 0;
    }

    .shipping-partners {
      margin-top: 32px;
    }

    .partner-logos {
      display: flex;
      justify-content: center;
      gap: 24px;
      flex-wrap: wrap;
      margin-top: 16px;
    }

    .partner-logos img {
      height: 40px;
      opacity: 0.8;
      transition: opacity 0.2s;
    }

    .partner-logos img:hover {
      opacity: 1;
    }

    .result-card {
      margin-top: 24px;
    }

    @media (max-width: 480px) {
      .partner-logos {
        gap: 16px;
      }

      .partner-logos img {
        height: 32px;
      }
    }
  `]
})
export class ShippingTrackingComponent {
  trackingNumber: string = '';
  trackingResult: string = '';

  trackShipment() {
    // Bu kısım backend entegrasyonu yapıldığında gerçek kargo takip sistemine bağlanacak
    this.trackingResult = 'Kargo takip sistemine bağlanılıyor...';
    // Simüle edilmiş bir yanıt
    setTimeout(() => {
      this.trackingResult = `${this.trackingNumber} numaralı kargonuz yolda. Tahmini teslimat: 2 iş günü içinde.`;
    }, 1000);
  }
} 