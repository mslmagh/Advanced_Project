import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatSortModule } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Router, RouterModule } from '@angular/router';
import { OrderService, Order } from '../../services/order.service';
import { AuthService } from '../../../auth/services/auth.service';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-list',
  template: `
    <div class="orders-container">
      <h2>Siparişlerim</h2>

      <table mat-table [dataSource]="dataSource" matSort class="orders-table">
        <ng-container matColumnDef="id">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>Sipariş No</th>
          <td mat-cell *matCellDef="let order">{{ order.id }}</td>
        </ng-container>

        <ng-container matColumnDef="date">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>Tarih</th>
          <td mat-cell *matCellDef="let order">
            {{ order.createdAt | date:'dd/MM/yyyy HH:mm' }}
          </td>
        </ng-container>

        <ng-container matColumnDef="total">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>Tutar</th>
          <td mat-cell *matCellDef="let order">
            {{ order.total | currency:'TRY':'symbol-narrow':'1.2-2' }}
          </td>
        </ng-container>

        <ng-container matColumnDef="status">
          <th mat-header-cell *matHeaderCellDef mat-sort-header>Durum</th>
          <td mat-cell *matCellDef="let order">
            <span class="status-badge" [class]="order.status">
              {{ getStatusText(order.status) }}
            </span>
          </td>
        </ng-container>

        <ng-container matColumnDef="actions">
          <th mat-header-cell *matHeaderCellDef></th>
          <td mat-cell *matCellDef="let order">
            <button mat-icon-button [routerLink]="['/orders', order.id]">
              <mat-icon>visibility</mat-icon>
            </button>
            <button mat-icon-button color="warn" 
                    *ngIf="order.status === 'pending'"
                    (click)="cancelOrder(order)">
              <mat-icon>cancel</mat-icon>
            </button>
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns"
            class="order-row"
            [routerLink]="['/orders', row.id]"></tr>
      </table>

      <div class="no-orders" *ngIf="!dataSource.data.length">
        <mat-icon>receipt_long</mat-icon>
        <h3>Henüz siparişiniz bulunmuyor</h3>
        <p>Alışveriş yapmak için ürünleri inceleyebilirsiniz.</p>
        <button mat-raised-button color="primary" routerLink="/products">
          Ürünleri İncele
        </button>
      </div>
    </div>
  `,
  styles: [`
    .orders-container {
      padding: 20px;
    }
    .orders-table {
      width: 100%;
      margin-top: 20px;
    }
    .order-row {
      cursor: pointer;
    }
    .order-row:hover {
      background: #f5f5f5;
    }
    .status-badge {
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 0.9em;
    }
    .pending {
      background: #fff3e0;
      color: #e65100;
    }
    .processing {
      background: #e3f2fd;
      color: #1565c0;
    }
    .shipped {
      background: #e8f5e9;
      color: #2e7d32;
    }
    .delivered {
      background: #e8eaf6;
      color: #283593;
    }
    .cancelled {
      background: #fbe9e7;
      color: #c62828;
    }
    .no-orders {
      text-align: center;
      padding: 40px;
    }
    .no-orders mat-icon {
      font-size: 48px;
      width: 48px;
      height: 48px;
      color: #666;
    }
  `],
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    RouterModule
  ]
})
export class OrderListComponent implements OnInit {
  displayedColumns = ['id', 'date', 'total', 'status', 'actions'];
  dataSource = new MatTableDataSource<Order>([]);

  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private orderService: OrderService,
    private router: Router,
    public authService: AuthService
  ) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  loadOrders(): void {
    this.orderService.getOrders().subscribe(orders => {
      this.dataSource.data = orders;
    });
  }

  cancelOrder(order: Order): void {
    if (confirm('Bu siparişi iptal etmek istediğinizden emin misiniz?')) {
      this.orderService.cancelOrder(order.id).subscribe(() => {
        this.loadOrders();
      });
    }
  }

  getStatusText(status: Order['status']): string {
    const statusMap: Record<Order['status'], string> = {
      pending: 'Beklemede',
      processing: 'Hazırlanıyor',
      shipped: 'Kargoya Verildi',
      delivered: 'Teslim Edildi',
      cancelled: 'İptal Edildi'
    };
    return statusMap[status];
  }
} 