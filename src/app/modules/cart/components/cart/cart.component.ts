import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    RouterModule
  ],
  template: `
    <div class="cart-container">
      <h1>Sepetim</h1>

      <div class="cart-content" *ngIf="cartItems.length > 0">
        <div class="cart-items">
          <mat-card class="cart-item" *ngFor="let item of cartItems">
            <div class="item-image">
              <img [src]="item.image" [alt]="item.name">
            </div>
            <div class="item-details">
              <h3>{{item.name}}</h3>
              <p class="price">{{item.price | currency:'TRY':'symbol-narrow':'1.2-2'}}</p>
              <div class="quantity-controls">
                <button mat-icon-button (click)="updateQuantity(item, -1)">
                  <mat-icon>remove</mat-icon>
                </button>
                <span class="quantity">{{item.quantity}}</span>
                <button mat-icon-button (click)="updateQuantity(item, 1)">
                  <mat-icon>add</mat-icon>
                </button>
              </div>
            </div>
            <button mat-icon-button color="warn" class="remove-button" (click)="removeFromCart(item)">
              <mat-icon>close</mat-icon>
            </button>
          </mat-card>
        </div>

        <mat-card class="cart-summary">
          <h2>Sipariş Özeti</h2>
          <div class="summary-item">
            <span>Ara Toplam</span>
            <span>{{subtotal | currency:'TRY':'symbol-narrow':'1.2-2'}}</span>
          </div>
          <div class="summary-item">
            <span>Kargo</span>
            <span>{{shipping | currency:'TRY':'symbol-narrow':'1.2-2'}}</span>
          </div>
          <mat-divider></mat-divider>
          <div class="summary-item total">
            <span>Toplam</span>
            <span>{{total | currency:'TRY':'symbol-narrow':'1.2-2'}}</span>
          </div>
          <button mat-raised-button color="primary" class="checkout-button">
            Alışverişi Tamamla
          </button>
        </mat-card>
      </div>

      <div class="empty-cart" *ngIf="cartItems.length === 0">
        <mat-icon>shopping_cart</mat-icon>
        <h2>Sepetiniz Boş</h2>
        <p>Sepetinizde ürün bulunmamaktadır.</p>
        <button mat-raised-button color="primary" routerLink="/">Alışverişe Başla</button>
      </div>
    </div>
  `,
  styles: [`
    .cart-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 24px;
    }

    h1 {
      margin-bottom: 24px;
      color: #333;
    }

    .cart-content {
      display: grid;
      grid-template-columns: 1fr 320px;
      gap: 24px;
    }

    .cart-items {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .cart-item {
      display: grid;
      grid-template-columns: 120px 1fr auto;
      gap: 16px;
      padding: 16px;
    }

    .item-image img {
      width: 100%;
      height: 120px;
      object-fit: cover;
      border-radius: 4px;
    }

    .item-details h3 {
      margin: 0 0 8px;
      font-size: 16px;
      color: #333;
    }

    .price {
      font-size: 18px;
      font-weight: bold;
      color: #ff6000;
      margin: 8px 0;
    }

    .quantity-controls {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .quantity {
      min-width: 24px;
      text-align: center;
    }

    .cart-summary {
      padding: 24px;
      align-self: start;
    }

    .cart-summary h2 {
      margin: 0 0 16px;
      font-size: 18px;
      color: #333;
    }

    .summary-item {
      display: flex;
      justify-content: space-between;
      margin: 8px 0;
      color: #666;
    }

    .total {
      font-size: 18px;
      font-weight: bold;
      color: #333;
      margin-top: 16px;
    }

    .checkout-button {
      width: 100%;
      margin-top: 16px;
    }

    .empty-cart {
      text-align: center;
      padding: 48px 0;
    }

    .empty-cart mat-icon {
      font-size: 64px;
      height: 64px;
      width: 64px;
      color: #ccc;
    }

    .empty-cart h2 {
      margin: 24px 0 16px;
      color: #333;
    }

    .empty-cart p {
      color: #666;
      margin-bottom: 24px;
    }

    @media (max-width: 768px) {
      .cart-content {
        grid-template-columns: 1fr;
      }

      .cart-item {
        grid-template-columns: 100px 1fr auto;
      }

      .item-image img {
        height: 100px;
      }
    }
  `]
})
export class CartComponent {
  cartItems: any[] = [];
  shipping: number = 29.90;

  get subtotal(): number {
    return this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  get total(): number {
    return this.subtotal + this.shipping;
  }

  updateQuantity(item: any, change: number) {
    const newQuantity = item.quantity + change;
    if (newQuantity > 0) {
      item.quantity = newQuantity;
    }
  }

  removeFromCart(item: any) {
    const index = this.cartItems.indexOf(item);
    if (index > -1) {
      this.cartItems.splice(index, 1);
    }
  }
} 