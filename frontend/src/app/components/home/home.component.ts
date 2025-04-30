import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

interface Product {
  id: number;
  image: string;
  title: string;
  brand: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating?: number;
  reviewCount?: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, MatButtonModule, MatIconModule],
  template: `
    <main class="home-container">
      <section class="section-title">
        <h2>Müşterim, Sana Özel Ürünler</h2>
        <a routerLink="/tumu" class="view-all">Tümünü Gör</a>
      </section>

      <div class="products-grid">
        <div *ngFor="let product of products" class="product-card">
          <div class="product-image">
            <img [src]="product.image" [alt]="product.title">
            <button mat-icon-button class="favorite-button">
              <mat-icon>favorite_border</mat-icon>
            </button>
          </div>
          <div class="product-info">
            <div class="product-brand">{{ product.brand }}</div>
            <h3 class="product-title">{{ product.title }}</h3>
            <div class="price-container">
              <span class="current-price">₺{{ product.price }}</span>
              <span *ngIf="product.originalPrice" class="original-price">₺{{ product.originalPrice }}</span>
              <span *ngIf="product.discount" class="discount">{{ product.discount }}% İndirim</span>
            </div>
            <button mat-button class="add-to-cart">Sepete Ekle</button>
          </div>
        </div>
      </div>
    </main>
  `,
  styles: [`
    .home-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 24px 16px;
    }

    .section-title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 24px;
    }

    .section-title h2 {
      font-size: 24px;
      color: #333;
      margin: 0;
    }

    .view-all {
      color: #ff6000;
      text-decoration: none;
      font-size: 14px;
      font-weight: 500;
    }

    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      gap: 24px;
    }

    .product-card {
      background: white;
      border-radius: 8px;
      overflow: hidden;
      transition: transform 0.2s;
      border: 1px solid #e5e5e5;
    }

    .product-card:hover {
      transform: translateY(-4px);
    }

    .product-image {
      position: relative;
      padding-top: 100%;
    }

    .product-image img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .favorite-button {
      position: absolute;
      top: 8px;
      right: 8px;
      background: white !important;
      box-shadow: 0 2px 4px rgba(0,0,0,0.1);
    }

    .product-info {
      padding: 16px;
    }

    .product-brand {
      color: #666;
      font-size: 12px;
      margin-bottom: 4px;
    }

    .product-title {
      font-size: 14px;
      color: #333;
      margin: 0 0 8px;
      height: 40px;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }

    .price-container {
      margin-bottom: 12px;
    }

    .current-price {
      font-size: 18px;
      font-weight: 600;
      color: #333;
    }

    .original-price {
      font-size: 14px;
      color: #999;
      text-decoration: line-through;
      margin-left: 8px;
    }

    .discount {
      display: inline-block;
      background: #ff6000;
      color: white;
      font-size: 12px;
      padding: 2px 6px;
      border-radius: 4px;
      margin-left: 8px;
    }

    .add-to-cart {
      width: 100%;
      background: #ff6000 !important;
      color: white !important;
    }

    @media (max-width: 768px) {
      .products-grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 480px) {
      .products-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class HomeComponent {
  products: Product[] = [
    {
      id: 1,
      image: 'assets/images/products/scooter1.jpg',
      title: 'MOTOYOL Scooter 6/6 125 150 Uyumlu Torash Modifiye On Maşa Rulmanı',
      brand: 'MOTOYOL',
      price: 646.66,
      originalPrice: 799.99,
      discount: 19
    },
    {
      id: 2,
      image: 'assets/images/products/scooter2.jpg',
      title: 'SpeedUp Speed Up Scooter 6/6 125CC Motosiklet Arka Varyatör',
      brand: 'SpeedUp',
      price: 779.00,
      originalPrice: 875.50,
      discount: 11
    },
    {
      id: 3,
      image: 'assets/images/products/pillow.jpg',
      title: 'venucci home & living Quincy Bukle Yumruk Peluş Post Halı',
      brand: 'venucci home & living',
      price: 524.99
    },
    {
      id: 4,
      image: 'assets/images/products/beatrix.jpg',
      title: 'Bando Arora Beatrix (PERFORMANS SET) Japon Kahvesi Demleme Seti',
      brand: 'Bando',
      price: 3403.50
    },
    {
      id: 5,
      image: 'assets/images/products/project-x.jpg',
      title: 'L\'sDoren Project X 4.3inc IPS H4 Ekran 10000+ Oyunlu Retro',
      brand: 'L\'sDoren',
      price: 2786.02,
      originalPrice: 3225.72,
      discount: 14
    }
  ];
}