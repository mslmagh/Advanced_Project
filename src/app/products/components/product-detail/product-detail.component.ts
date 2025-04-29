import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ProductService, Product } from '../../services/product.service';
import { CartService } from '../../../cart/services/cart.service';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-product-detail',
  template: `
    <div class="product-detail" *ngIf="product">
      <div class="product-image">
        <img [src]="product.imageUrl" [alt]="product.name">
      </div>
      
      <div class="product-info">
        <h1>{{ product.name }}</h1>
        <p class="category">{{ product.category }}</p>
        <p class="price">{{ product.price | currency:'TRY':'symbol-narrow':'1.2-2' }}</p>
        
        <div class="seller-info">
          <mat-icon>store</mat-icon>
          <span>Satıcı: {{ product.seller.name }}</span>
        </div>

        <p class="description">{{ product.description }}</p>

        <div class="actions">
          <mat-form-field appearance="outline" *ngIf="authService.hasRole('customer')">
            <mat-label>Adet</mat-label>
            <input matInput type="number" [(ngModel)]="quantity" min="1" max="10">
          </mat-form-field>

          <button mat-raised-button color="primary" 
                  *ngIf="authService.hasRole('customer')"
                  (click)="addToCart()"
                  [disabled]="quantity < 1">
            <mat-icon>add_shopping_cart</mat-icon>
            Sepete Ekle
          </button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .product-detail {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;
      padding: 24px;
    }
    .product-image img {
      width: 100%;
      max-height: 500px;
      object-fit: contain;
      border-radius: 8px;
    }
    .product-info {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
    .category {
      color: #666;
      font-size: 1.1em;
    }
    .price {
      font-size: 2em;
      font-weight: bold;
      color: #1976d2;
    }
    .seller-info {
      display: flex;
      align-items: center;
      gap: 8px;
      color: #666;
    }
    .description {
      font-size: 1.1em;
      line-height: 1.6;
      margin: 16px 0;
    }
    .actions {
      display: flex;
      gap: 16px;
      align-items: center;
      margin-top: 24px;
    }
    mat-form-field {
      width: 100px;
    }
  `]
})
export class ProductDetailComponent implements OnInit {
  product: Product | null = null;
  quantity: number = 1;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private cartService: CartService,
    private snackBar: MatSnackBar,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productService.getProduct(productId).subscribe(product => {
        this.product = product;
      });
    }
  }

  addToCart(): void {
    if (this.product && this.quantity > 0) {
      this.cartService.addToCart({
        productId: this.product.id,
        quantity: this.quantity
      }).subscribe(() => {
        this.snackBar.open('Ürün sepete eklendi!', 'Kapat', {
          duration: 3000
        });
      });
    }
  }
} 