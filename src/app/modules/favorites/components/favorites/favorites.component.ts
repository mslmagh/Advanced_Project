import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-favorites',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatIconModule, MatButtonModule, MatGridListModule],
  template: `
    <div class="favorites-container">
      <h1>Favorilerim</h1>
      
      <div class="favorites-grid" *ngIf="favorites.length > 0">
        <mat-card class="product-card" *ngFor="let product of favorites">
          <img mat-card-image [src]="product.image" [alt]="product.name">
          <mat-card-content>
            <h3>{{product.name}}</h3>
            <p class="price">{{product.price | currency:'TRY':'symbol-narrow':'1.2-2'}}</p>
          </mat-card-content>
          <mat-card-actions>
            <button mat-button color="warn" (click)="removeFromFavorites(product)">
              <mat-icon>favorite</mat-icon> Favorilerden Çıkar
            </button>
            <button mat-raised-button color="primary">
              <mat-icon>shopping_cart</mat-icon> Sepete Ekle
            </button>
          </mat-card-actions>
        </mat-card>
      </div>

      <div class="empty-favorites" *ngIf="favorites.length === 0">
        <mat-icon>favorite_border</mat-icon>
        <h2>Favori Ürününüz Bulunmamaktadır</h2>
        <p>Beğendiğiniz ürünleri favorilerinize ekleyerek daha sonra kolayca ulaşabilirsiniz.</p>
        <button mat-raised-button color="primary" routerLink="/">Alışverişe Başla</button>
      </div>
    </div>
  `,
  styles: [`
    .favorites-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 24px;
    }

    h1 {
      margin-bottom: 24px;
      color: #333;
    }

    .favorites-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 24px;
    }

    .product-card {
      display: flex;
      flex-direction: column;
    }

    .product-card img {
      height: 200px;
      object-fit: cover;
    }

    .product-card h3 {
      margin: 16px 0 8px;
      font-size: 16px;
      color: #333;
    }

    .price {
      font-size: 18px;
      font-weight: bold;
      color: #ff6000;
    }

    mat-card-actions {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding: 16px;
    }

    .empty-favorites {
      text-align: center;
      padding: 48px 0;
    }

    .empty-favorites mat-icon {
      font-size: 64px;
      height: 64px;
      width: 64px;
      color: #ccc;
    }

    .empty-favorites h2 {
      margin: 24px 0 16px;
      color: #333;
    }

    .empty-favorites p {
      color: #666;
      margin-bottom: 24px;
    }

    @media (max-width: 768px) {
      .favorites-grid {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
      }
    }
  `]
})
export class FavoritesComponent {
  favorites: any[] = [];

  removeFromFavorites(product: any) {
    const index = this.favorites.indexOf(product);
    if (index > -1) {
      this.favorites.splice(index, 1);
    }
  }
} 