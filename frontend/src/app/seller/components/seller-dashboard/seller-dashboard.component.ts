import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-seller-dashboard',
  template: `
    <div class="dashboard">
      <h2>Satıcı Paneli</h2>
      <mat-card>
        <mat-card-content>
          <p>Hoş geldiniz! Buradan ürünlerinizi yönetebilirsiniz.</p>
        </mat-card-content>
        <mat-card-actions>
          <button mat-raised-button color="primary" routerLink="/seller/products">
            Ürünlerimi Yönet
          </button>
        </mat-card-actions>
      </mat-card>
    </div>
  `,
  styles: [`
    .dashboard {
      padding: 20px;
    }
    mat-card {
      max-width: 600px;
      margin: 20px auto;
    }
  `],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    RouterModule
  ]
})
export class SellerDashboardComponent {} 