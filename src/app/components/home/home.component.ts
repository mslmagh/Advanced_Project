import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductCardComponent } from '../../shared/components/product-card/product-card.component';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  discount?: number;
  rating: number;
  ratingCount: number;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductCardComponent],
  template: `
    <div class="home-container">
      <div class="sections-nav">
        @for (section of sections; track section.type) {
          <button 
            class="section-btn"
            [class.active]="section.type === 'most-added'"
          >
            {{ section.title }}
          </button>
        }
      </div>

      <div class="products-grid">
        @for (product of featuredProducts; track product.id) {
          <app-product-card [product]="product"></app-product-card>
        }
      </div>
    </div>
  `,
  styles: [`
    .home-container {
      padding: 20px 0;
    }

    .sections-nav {
      display: flex;
      gap: 20px;
      margin-bottom: 20px;
      border-bottom: 1px solid #e5e5e5;
    }

    .section-btn {
      padding: 10px 20px;
      border: none;
      background: none;
      font-size: 16px;
      color: #666;
      cursor: pointer;
      position: relative;
    }

    .section-btn.active {
      color: #f27a1a;
      font-weight: 600;
    }

    .section-btn.active::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #f27a1a;
    }

    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
    }
  `]
})
export class HomeComponent {
  featuredProducts: Product[] = [
    {
      id: 1,
      name: 'MOTOYOL Scooter 6y6 125 150 Uyumlu Tornalı Modifiye Ön Maşa Rulmanı',
      price: 646.66,
      image: 'assets/products/product1.jpg',
      rating: 3.5,
      ratingCount: 11
    },
    {
      id: 2,
      name: 'SpeedUp Speed Up Scooter 6y6 125CC Motosiklet Arka Varyatör',
      price: 779,
      originalPrice: 879,
      image: 'assets/products/product2.jpg',
      rating: 3.3,
      ratingCount: 7,
      discount: 15
    }
  ];

  sections = [
    { title: 'Sepete en çok eklenenler', type: 'most-added' },
    { title: 'En çok öne çıkanlar', type: 'featured' },
    { title: 'Flaş Ürünler', type: 'flash' }
  ];
}