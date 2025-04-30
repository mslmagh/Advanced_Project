import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-management',
  template: `
    <div class="order-management">
      <h2>Sipariş Yönetimi</h2>
      <table mat-table [dataSource]="orders">
        <ng-container matColumnDef="id">
          <th mat-header-cell *matHeaderCellDef>Sipariş No</th>
          <td mat-cell *matCellDef="let order">{{ order.id }}</td>
        </ng-container>

        <ng-container matColumnDef="customer">
          <th mat-header-cell *matHeaderCellDef>Müşteri</th>
          <td mat-cell *matCellDef="let order">{{ order.customer }}</td>
        </ng-container>

        <ng-container matColumnDef="total">
          <th mat-header-cell *matHeaderCellDef>Toplam</th>
          <td mat-cell *matCellDef="let order">{{ order.total | currency:'TRY':'symbol-narrow':'1.2-2' }}</td>
        </ng-container>

        <ng-container matColumnDef="status">
          <th mat-header-cell *matHeaderCellDef>Durum</th>
          <td mat-cell *matCellDef="let order">{{ order.status }}</td>
        </ng-container>

        <ng-container matColumnDef="actions">
          <th mat-header-cell *matHeaderCellDef></th>
          <td mat-cell *matCellDef="let order">
            <button mat-icon-button>
              <mat-icon>edit</mat-icon>
            </button>
          </td>
        </ng-container>

        <tr mat-header-row *matHeaderRowDef="displayedColumns"></tr>
        <tr mat-row *matRowDef="let row; columns: displayedColumns"></tr>
      </table>
    </div>
  `,
  styles: [`
    .order-management {
      padding: 20px;
    }
    table {
      width: 100%;
    }
  `],
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class OrderManagementComponent implements OnInit {
  displayedColumns = ['id', 'customer', 'total', 'status', 'actions'];
  orders: any[] = [];

  ngOnInit(): void {
    // TODO: Load orders from service
  }
} 