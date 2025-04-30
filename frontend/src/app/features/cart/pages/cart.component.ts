import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="cart-container">
      <h1>Sepetim</h1>
      <!-- Content will be added later -->
    </div>
  `,
  styles: [`
    .cart-container {
      padding: 24px;
    }
  `]
})
export class CartComponent {} 