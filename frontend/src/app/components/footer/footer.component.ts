import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, MatIconModule, CommonModule],
  template: `
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Kurumsal</h3>
          <ul>
            <li><a routerLink="/hakkimizda">Hakkımızda</a></li>
            <li><a routerLink="/kariyer">Kariyer</a></li>
            <li><a routerLink="/magazalarimiz">Mağazalarımız</a></li>
            <li><a routerLink="/basin">Basın</a></li>
            <li><a routerLink="/yatirimci-iliskileri">Yatırımcı İlişkileri</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>Müşteri Hizmetleri</h3>
          <ul>
            <li><a routerLink="/yardim">Sıkça Sorulan Sorular</a></li>
            <li><a routerLink="/iade-degisim">İade ve Değişim</a></li>
            <li><a routerLink="/kargo-takip">Kargo Takip</a></li>
            <li><a routerLink="/iletisim">İletişim</a></li>
            <li><a routerLink="/gizlilik">Gizlilik Politikası</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>Kategoriler</h3>
          <ul>
            <li><a routerLink="/kadin">Kadın</a></li>
            <li><a routerLink="/erkek">Erkek</a></li>
            <li><a routerLink="/anne-cocuk">Anne & Çocuk</a></li>
            <li><a routerLink="/ev-yasam">Ev & Yaşam</a></li>
            <li><a routerLink="/elektronik">Elektronik</a></li>
          </ul>
        </div>

        <div class="footer-section">
          <h3>Bizi Takip Edin</h3>
          <div class="social-links">
            <a href="https://facebook.com" target="_blank" class="social-link">
              <mat-icon>facebook</mat-icon>
            </a>
            <a href="https://twitter.com" target="_blank" class="social-link">
              <mat-icon>twitter</mat-icon>
            </a>
            <a href="https://instagram.com" target="_blank" class="social-link">
              <mat-icon>instagram</mat-icon>
            </a>
            <a href="https://youtube.com" target="_blank" class="social-link">
              <mat-icon>youtube</mat-icon>
            </a>
          </div>

          <div class="mobile-apps">
            <h3>Mobil Uygulamalar</h3>
            <div class="app-links">
              <a href="#" class="app-link">
                <img src="assets/images/app-store.svg" alt="App Store">
              </a>
              <a href="#" class="app-link">
                <img src="assets/images/google-play.svg" alt="Google Play">
              </a>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <div class="payment-methods">
          <img src="assets/images/visa.svg" alt="Visa">
          <img src="assets/images/mastercard.svg" alt="Mastercard">
          <img src="assets/images/paypal.svg" alt="PayPal">
          <img src="assets/images/american-express.svg" alt="American Express">
        </div>

        <div class="copyright">
          <p>&copy; 2024 aldımgitti. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  `,
  styles: [`
    .footer {
      background-color: #f8f8f8;
      padding: 48px 0 0;
      margin-top: 48px;
      border-top: 1px solid #e5e5e5;
    }

    .footer-content {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 16px;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 32px;
    }

    .footer-section h3 {
      color: #333;
      font-size: 16px;
      font-weight: 600;
      margin-bottom: 16px;
    }

    .footer-section ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .footer-section ul li {
      margin-bottom: 12px;
    }

    .footer-section ul li a {
      color: #666;
      text-decoration: none;
      font-size: 14px;
      transition: color 0.2s;
    }

    .footer-section ul li a:hover {
      color: #ff6000;
    }

    .social-links {
      display: flex;
      gap: 16px;
      margin-bottom: 24px;
    }

    .social-link {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background-color: #fff;
      color: #666;
      transition: all 0.2s;
      border: 1px solid #e5e5e5;
    }

    .social-link:hover {
      background-color: #ff6000;
      color: #fff;
      border-color: #ff6000;
    }

    .mobile-apps {
      margin-top: 24px;
    }

    .app-links {
      display: flex;
      gap: 12px;
      margin-top: 12px;
    }

    .app-link img {
      height: 40px;
      border-radius: 6px;
      transition: opacity 0.2s;
    }

    .app-link img:hover {
      opacity: 0.8;
    }

    .footer-bottom {
      margin-top: 48px;
      padding: 24px 16px;
      background-color: #fff;
      border-top: 1px solid #e5e5e5;
    }

    .payment-methods {
      display: flex;
      justify-content: center;
      gap: 24px;
      margin-bottom: 16px;
    }

    .payment-methods img {
      height: 24px;
      opacity: 0.6;
      transition: opacity 0.2s;
    }

    .payment-methods img:hover {
      opacity: 1;
    }

    .copyright {
      text-align: center;
      color: #666;
      font-size: 14px;
    }

    @media (max-width: 768px) {
      .footer-content {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 480px) {
      .footer-content {
        grid-template-columns: 1fr;
      }

      .payment-methods {
        flex-wrap: wrap;
        gap: 16px;
      }
    }
  `]
})
export class FooterComponent {} 