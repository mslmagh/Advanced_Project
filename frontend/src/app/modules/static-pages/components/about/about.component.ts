import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  template: `
    <div class="container">
      <mat-card>
        <mat-card-header>
          <mat-card-title>Hakkımızda</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <h2>aldımgitti: Güvenilir Alışverişin Adresi</h2>
          
          <p>aldımgitti olarak, müşterilerimize en kaliteli ürünleri, en uygun fiyatlarla sunmayı hedefliyoruz. 
          Geniş ürün yelpazemiz ve güvenilir alışveriş deneyimimizle Türkiye'nin önde gelen e-ticaret platformlarından biri olmayı başardık.</p>

          <h3>Misyonumuz</h3>
          <p>Müşterilerimize güvenli, hızlı ve keyifli bir alışveriş deneyimi sunmak, aynı zamanda satıcılarımıza büyümeleri için 
          gerekli platformu sağlamaktır.</p>

          <h3>Vizyonumuz</h3>
          <p>Türkiye'nin ve bölgenin en büyük ve en güvenilir e-ticaret platformu olmak, teknoloji ve inovasyonla 
          alışveriş deneyimini sürekli geliştirmektir.</p>

          <h3>Değerlerimiz</h3>
          <ul>
            <li>Müşteri memnuniyeti odaklı hizmet</li>
            <li>Güvenilirlik ve şeffaflık</li>
            <li>Kalite ve uygun fiyat</li>
            <li>Hızlı teslimat</li>
            <li>7/24 müşteri desteği</li>
          </ul>
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

    mat-card {
      margin-bottom: 24px;
    }

    mat-card-title {
      color: #333;
      font-size: 24px;
      margin-bottom: 24px;
    }

    h2 {
      color: #ff6000;
      margin-bottom: 16px;
    }

    h3 {
      color: #333;
      margin: 24px 0 16px;
    }

    p {
      color: #666;
      line-height: 1.6;
      margin-bottom: 16px;
    }

    ul {
      list-style-type: none;
      padding: 0;
    }

    li {
      color: #666;
      margin-bottom: 8px;
      padding-left: 20px;
      position: relative;
    }

    li:before {
      content: "•";
      color: #ff6000;
      position: absolute;
      left: 0;
    }
  `]
})
export class AboutComponent {} 