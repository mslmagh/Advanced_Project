import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CartService, Cart, CartItem } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  template: `
    <mat-stepper linear #stepper>
      <!-- Sepet İçeriği -->
      <mat-step [completed]="cart?.items.length > 0">
        <ng-template matStepLabel>Sepet</ng-template>
        
        <div class="cart-content" *ngIf="cart?.items.length; else emptyCart">
          <table mat-table [dataSource]="cart.items">
            <ng-container matColumnDef="image">
              <th mat-header-cell *matHeaderCellDef>Ürün</th>
              <td mat-cell *matCellDef="let item">
                <img [src]="item.product.imageUrl" [alt]="item.product.name">
              </td>
            </ng-container>

            <ng-container matColumnDef="name">
              <th mat-header-cell *matHeaderCellDef>Ürün Adı</th>
              <td mat-cell *matCellDef="let item">{{ item.product.name }}</td>
            </ng-container>

            <ng-container matColumnDef="price">
              <th mat-header-cell *matHeaderCellDef>Fiyat</th>
              <td mat-cell *matCellDef="let item">
                {{ item.product.price | currency:'TRY':'symbol-narrow':'1.2-2' }}
              </td>
            </ng-container>

            <ng-container matColumnDef="quantity">
              <th mat-header-cell *matHeaderCellDef>Adet</th>
              <td mat-cell *matCellDef="let item">
                <mat-form-field appearance="outline">
                  <input matInput type="number" [ngModel]="item.quantity"
                         (ngModelChange)="updateQuantity(item, $event)"
                         min="1" max="10">
                </mat-form-field>
              </td>
            </ng-container>

            <ng-container matColumnDef="total">
              <th mat-header-cell *matHeaderCellDef>Toplam</th>
              <td mat-cell *matCellDef="let item">
                {{ item.quantity * item.product.price | currency:'TRY':'symbol-narrow':'1.2-2' }}
              </td>
            </ng-container>

            <ng-container matColumnDef="actions">
              <th mat-header-cell *matHeaderCellDef></th>
              <td mat-cell *matCellDef="let item">
                <button mat-icon-button color="warn" (click)="removeItem(item)">
                  <mat-icon>delete</mat-icon>
                </button>
              </td>
            </ng-container>

            <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
            <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
          </table>

          <div class="cart-summary">
            <h3>Sepet Toplamı: {{ cart.total | currency:'TRY':'symbol-narrow':'1.2-2' }}</h3>
            <button mat-raised-button color="primary" matStepperNext>
              Devam Et
            </button>
          </div>
        </div>

        <ng-template #emptyCart>
          <div class="empty-cart">
            <mat-icon>shopping_cart</mat-icon>
            <h2>Sepetiniz Boş</h2>
            <p>Alışverişe başlamak için ürünleri inceleyin.</p>
            <button mat-raised-button color="primary" routerLink="/products">
              Ürünleri İncele
            </button>
          </div>
        </ng-template>
      </mat-step>

      <!-- Teslimat Bilgileri -->
      <mat-step [stepControl]="deliveryForm">
        <ng-template matStepLabel>Teslimat</ng-template>
        <form [formGroup]="deliveryForm">
          <div class="form-grid">
            <mat-form-field appearance="outline">
              <mat-label>Ad Soyad</mat-label>
              <input matInput formControlName="fullName" required>
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Telefon</mat-label>
              <input matInput formControlName="phone" required>
            </mat-form-field>

            <mat-form-field appearance="outline" class="full-width">
              <mat-label>Adres</mat-label>
              <textarea matInput formControlName="address" rows="3" required></textarea>
            </mat-form-field>
          </div>

          <div class="form-actions">
            <button mat-button matStepperPrevious>Geri</button>
            <button mat-raised-button color="primary" matStepperNext
                    [disabled]="!deliveryForm.valid">
              Devam Et
            </button>
          </div>
        </form>
      </mat-step>

      <!-- Ödeme -->
      <mat-step [stepControl]="paymentForm">
        <ng-template matStepLabel>Ödeme</ng-template>
        <form [formGroup]="paymentForm">
          <div class="form-grid">
            <mat-form-field appearance="outline">
              <mat-label>Kart Üzerindeki İsim</mat-label>
              <input matInput formControlName="cardName" required>
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Kart Numarası</mat-label>
              <input matInput formControlName="cardNumber" required>
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>Son Kullanma Tarihi</mat-label>
              <input matInput formControlName="expiryDate" placeholder="MM/YY" required>
            </mat-form-field>

            <mat-form-field appearance="outline">
              <mat-label>CVV</mat-label>
              <input matInput formControlName="cvv" required>
            </mat-form-field>
          </div>

          <div class="form-actions">
            <button mat-button matStepperPrevious>Geri</button>
            <button mat-raised-button color="primary"
                    [disabled]="!paymentForm.valid"
                    (click)="placeOrder()">
              Siparişi Tamamla
            </button>
          </div>
        </form>
      </mat-step>
    </mat-stepper>
  `,
  styles: [`
    .cart-content {
      margin: 20px 0;
    }
    table {
      width: 100%;
    }
    .mat-column-image img {
      width: 50px;
      height: 50px;
      object-fit: cover;
      border-radius: 4px;
    }
    .mat-column-quantity mat-form-field {
      width: 70px;
    }
    .cart-summary {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
      padding: 20px;
      background: #f5f5f5;
      border-radius: 4px;
    }
    .empty-cart {
      text-align: center;
      padding: 40px;
    }
    .empty-cart mat-icon {
      font-size: 48px;
      width: 48px;
      height: 48px;
      color: #666;
    }
    .form-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
      margin: 20px 0;
    }
    .full-width {
      grid-column: 1 / -1;
    }
    .form-actions {
      display: flex;
      gap: 16px;
      margin-top: 20px;
    }
  `]
})
export class CartComponent implements OnInit {
  cart: Cart | null = null;
  displayedColumns = ['image', 'name', 'price', 'quantity', 'total', 'actions'];
  deliveryForm: FormGroup;
  paymentForm: FormGroup;

  constructor(
    private cartService: CartService,
    private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar
  ) {
    this.deliveryForm = this.fb.group({
      fullName: ['', Validators.required],
      phone: ['', Validators.required],
      address: ['', Validators.required]
    });

    this.paymentForm = this.fb.group({
      cardName: ['', Validators.required],
      cardNumber: ['', [Validators.required, Validators.pattern('^[0-9]{16}$')]],
      expiryDate: ['', [Validators.required, Validators.pattern('^(0[1-9]|1[0-2])\/([0-9]{2})$')]],
      cvv: ['', [Validators.required, Validators.pattern('^[0-9]{3,4}$')]]
    });
  }

  ngOnInit(): void {
    this.loadCart();
  }

  loadCart(): void {
    this.cartService.getCart().subscribe(cart => {
      this.cart = cart;
    });
  }

  updateQuantity(item: CartItem, quantity: number): void {
    if (quantity >= 1 && quantity <= 10) {
      this.cartService.updateCartItem(item.id, quantity).subscribe();
    }
  }

  removeItem(item: CartItem): void {
    this.cartService.removeCartItem(item.id).subscribe();
  }

  placeOrder(): void {
    if (this.deliveryForm.valid && this.paymentForm.valid) {
      // TODO: Implement order creation logic
      this.snackBar.open('Siparişiniz başarıyla oluşturuldu!', 'Kapat', {
        duration: 3000
      });
      this.cartService.clearCart().subscribe(() => {
        this.router.navigate(['/orders']);
      });
    }
  }
} 