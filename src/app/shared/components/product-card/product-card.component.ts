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
      </div>
      <div class="product-info">
        <h3 class="product-name">{{ product.name }}</h3>
        <div class="price-container">
          <span class="current-price">{{ product.price | currency:'TRY':'symbol-narrow':'1.2-2' }}</span>
          @if (product.originalPrice) {
            <span class="original-price">{{ product.originalPrice | currency:'TRY':'symbol-narrow':'1.2-2' }}</span>
          }
        </div>
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
        @if (product.discount) {
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