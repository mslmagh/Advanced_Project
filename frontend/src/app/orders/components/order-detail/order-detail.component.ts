import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrderService, Order } from '../../services/order.service';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-order-detail',
  template: `
    <div class="order-detail">
      <mat-card *ngIf="order">
        <mat-card-header>
          <mat-card-title>Sipariş Detayı #{{ order.id }}</mat-card-title>
        </mat-card-header>
        <mat-card-content>
          <p><strong>Durum:</strong> {{ order.status }}</p>
          <p><strong>Tarih:</strong> {{ order.createdAt | date:'dd/MM/yyyy HH:mm' }}</p>
          <p><strong>Toplam:</strong> {{ order.total | currency:'TRY':'symbol-narrow':'1.2-2' }}</p>
        </mat-card-content>
        <mat-card-actions>
          <button mat-button routerLink="/orders">Geri Dön</button>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: [`
    .order-detail {
      padding: 20px;
    }
    mat-card {
      max-width: 600px;
      margin: 0 auto;
    }
  `],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ]
})
export class OrderDetailComponent implements OnInit {
  order: Order | null = null;

  constructor(
    private route: ActivatedRoute,
    private orderService: OrderService
  ) {}

  ngOnInit(): void {
    const orderId = this.route.snapshot.paramMap.get('id');
    if (orderId) {
      this.orderService.getOrder(orderId).subscribe(order => {
        this.order = order;
      });
    }
  }
} 