import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface Order {
  id: string;
  date: string;
  status: string;
  total: number;
  items: {
    name: string;
    quantity: number;
    price: number;
    image: string;
  }[];
}

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="orders-container">
      <div class="orders-header">
        <h1>Siparişlerim</h1>
      </div>

      <div class="orders-content">
        <nav class="profile-nav">
          <a routerLink="/hesabim" routerLinkActive="active">
            Kullanıcı Bilgilerim
          </a>
          <a routerLink="/hesabim/siparislerim" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">
            Siparişlerim
          </a>
          <a routerLink="/hesabim/adreslerim" routerLinkActive="active">
            Adreslerim
          </a>
          <a routerLink="/hesabim/kuponlarim" routerLinkActive="active">
            İndirim Kuponlarım
          </a>
        </nav>

        <div class="orders-list">
          <div class="order-card" *ngFor="let order of orders">
            <div class="order-header">
              <div class="order-info">
                <span class="order-date">{{ order.date }}</span>
                <span class="order-id">Sipariş No: {{ order.id }}</span>
              </div>
              <span class="order-status" [class.completed]="order.status === 'Tamamlandı'">
                {{ order.status }}
              </span>
            </div>

            <div class="order-items">
              <div class="order-item" *ngFor="let item of order.items">
                <img [src]="item.image" [alt]="item.name" class="item-image">
                <div class="item-details">
                  <h3>{{ item.name }}</h3>
                  <p>{{ item.quantity }} Adet</p>
                  <span class="item-price">{{ item.price | currency:'TRY':'symbol-narrow':'1.2-2' }}</span>
                </div>
              </div>
            </div>

            <div class="order-footer">
              <span class="order-total">Toplam: {{ order.total | currency:'TRY':'symbol-narrow':'1.2-2' }}</span>
              <button class="details-btn">Sipariş Detayı</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .orders-container {
      padding: 24px;
    }

    .orders-header {
      margin-bottom: 24px;
    }

    .orders-header h1 {
      font-size: 24px;
      color: #333;
    }

    .orders-content {
      display: grid;
      grid-template-columns: 250px 1fr;
      gap: 24px;
    }

    .profile-nav {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }

    .profile-nav a {
      padding: 12px 16px;
      text-decoration: none;
      color: #666;
      border-radius: 8px;
      transition: all 0.3s;
    }

    .profile-nav a:hover {
      background: #f8f8f8;
    }

    .profile-nav a.active {
      background: #f27a1a;
      color: white;
    }

    .orders-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .order-card {
      background: white;
      border-radius: 8px;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1);
      overflow: hidden;
    }

    .order-header {
      padding: 16px;
      border-bottom: 1px solid #eee;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .order-info {
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .order-date {
      color: #666;
      font-size: 14px;
    }

    .order-id {
      color: #333;
      font-weight: 500;
    }

    .order-status {
      padding: 6px 12px;
      border-radius: 16px;
      background: #eee;
      color: #666;
      font-size: 14px;
    }

    .order-status.completed {
      background: #e8f5e9;
      color: #2e7d32;
    }

    .order-items {
      padding: 16px;
    }

    .order-item {
      display: flex;
      gap: 16px;
      padding: 12px 0;
      border-bottom: 1px solid #eee;
    }

    .order-item:last-child {
      border-bottom: none;
    }

    .item-image {
      width: 80px;
      height: 80px;
      object-fit: cover;
      border-radius: 4px;
    }

    .item-details {
      flex: 1;
    }

    .item-details h3 {
      margin: 0 0 8px;
      font-size: 16px;
      color: #333;
    }

    .item-details p {
      margin: 0;
      color: #666;
      font-size: 14px;
    }

    .item-price {
      color: #f27a1a;
      font-weight: 500;
    }

    .order-footer {
      padding: 16px;
      border-top: 1px solid #eee;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .order-total {
      font-weight: 500;
      font-size: 18px;
      color: #333;
    }

    .details-btn {
      background: transparent;
      border: 1px solid #f27a1a;
      color: #f27a1a;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
      transition: all 0.3s;
    }

    .details-btn:hover {
      background: #f27a1a;
      color: white;
    }
  `]
})
export class OrdersComponent {
  orders: Order[] = [
    {
      id: 'TR123456789',
      date: '15 Mart 2024',
      status: 'Tamamlandı',
      total: 1299.99,
      items: [
        {
          name: 'Samsung Galaxy A54 128GB Akıllı Telefon',
          quantity: 1,
          price: 1299.99,
          image: 'assets/images/products/phone.jpg'
        }
      ]
    },
    {
      id: 'TR987654321',
      date: '10 Mart 2024',
      status: 'Kargoda',
      total: 459.98,
      items: [
        {
          name: 'Nike Spor Ayakkabı',
          quantity: 1,
          price: 299.99,
          image: 'assets/images/products/shoes.jpg'
        },
        {
          name: 'Adidas Spor Çanta',
          quantity: 1,
          price: 159.99,
          image: 'assets/images/products/bag.jpg'
        }
      ]
    }
  ];
} 