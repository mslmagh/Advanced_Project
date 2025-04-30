import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  discount?: number;
  rating: number;
  ratingCount: number;
  brand: string;
  model: string;
  hasKargoLabel?: boolean;
  hasCokAlLabel?: boolean;
  hasKuponLabel?: boolean;
}

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <div class="product-card">
      <div class="product-image">
        <img [src]="product.image" [alt]="product.name">
        @if (product.discount) {
          <span class="discount-badge">%{{ product.discount }}</span>
        }
        <button class="favorite-btn">
          <app-icon name="heart"></app-icon>
        </button>
        @if (product.hasCokAlLabel) {
          <div class="label cok-al">
            <img src="assets/icons/cok-al.svg" alt="Çok Al Az Öde">
            <span>Çok Al Az Öde</span>
          </div>
        }
        @if (product.hasKuponLabel) {
          <div class="label kupon">
            <img src="assets/icons/kupon.svg" alt="10 TL Kupon">
            <span>10 TL Kupon</span>
          </div>
        }
      </div>
      <div class="product-info">
        <div class="brand-model">
          <span class="brand">{{ product.brand }}</span>
          <span class="model">{{ product.model }}</span>
        </div>
        <h3 class="product-name">{{ product.name }}</h3>
        <div class="rating">
          <div class="stars">
            @for (star of [1,2,3,4,5]; track star) {
              <app-icon 
                name="star" 
                [class.filled]="star <= product.rating"
              ></app-icon>
            }
          </div>
          <span class="rating-count">({{ product.ratingCount }})</span>
        </div>
        <div class="price-container">
          @if (product.discount) {
            <div class="discount-info">
              <span class="original-price">{{ product.originalPrice | currency:'TRY':'symbol-narrow':'1.2-2' }}</span>
              <span class="discount-label">Son 30 Günün En Düşük Fiyatı!</span>
            </div>
          }
          <div class="current-price">{{ product.price | currency:'TRY':'symbol-narrow':'1.2-2' }}</div>
        </div>
        @if (product.hasCokAlLabel || product.hasKuponLabel) {
          <div class="shipping-info">
            <app-icon name="truck"></app-icon>
            <span>Kargo Bedava</span>
          </div>
        }
      </div>
    </div>
  `,
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product!: Product;
} 