import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { ChartConfiguration } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

interface DashboardStats {
  totalUsers: number;
  totalOrders: number;
  totalRevenue: number;
  ordersByStatus: {
    status: string;
    count: number;
  }[];
  revenueByMonth: {
    month: string;
    revenue: number;
  }[];
}

@Component({
  selector: 'app-admin-dashboard',
  template: `
    <div class="admin-dashboard">
      <h2>Yönetici Paneli</h2>

      <div class="stats-grid">
        <mat-card>
          <mat-card-content>
            <div class="stat-value">{{ stats?.totalUsers || 0 }}</div>
            <div class="stat-label">Toplam Kullanıcı</div>
          </mat-card-content>
        </mat-card>

        <mat-card>
          <mat-card-content>
            <div class="stat-value">{{ stats?.totalOrders || 0 }}</div>
            <div class="stat-label">Toplam Sipariş</div>
          </mat-card-content>
        </mat-card>

        <mat-card>
          <mat-card-content>
            <div class="stat-value">
              {{ stats?.totalRevenue || 0 | currency:'TRY':'symbol-narrow':'1.2-2' }}
            </div>
            <div class="stat-label">Toplam Gelir</div>
          </mat-card-content>
        </mat-card>
      </div>

      <div class="charts-grid">
        <mat-card class="chart-card">
          <mat-card-header>
            <mat-card-title>Aylık Gelir</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <canvas baseChart
              [data]="revenueChartData"
              [options]="chartOptions"
              [type]="'line'">
            </canvas>
          </mat-card-content>
        </mat-card>

        <mat-card class="chart-card">
          <mat-card-header>
            <mat-card-title>Sipariş Durumları</mat-card-title>
          </mat-card-header>
          <mat-card-content>
            <canvas baseChart
              [data]="orderStatusChartData"
              [options]="chartOptions"
              [type]="'doughnut'">
            </canvas>
          </mat-card-content>
        </mat-card>
      </div>

      <mat-tab-group>
        <mat-tab label="Kullanıcı Yönetimi">
          <router-outlet name="users"></router-outlet>
        </mat-tab>
        <mat-tab label="Sipariş Yönetimi">
          <router-outlet name="orders"></router-outlet>
        </mat-tab>
      </mat-tab-group>
    </div>
  `,
  styles: [`
    .admin-dashboard {
      padding: 20px;
    }
    .stats-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
      gap: 20px;
      margin-bottom: 24px;
    }
    .stat-value {
      font-size: 2em;
      font-weight: bold;
      color: #1976d2;
    }
    .stat-label {
      color: #666;
      margin-top: 8px;
    }
    .charts-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
      gap: 20px;
      margin-bottom: 24px;
    }
    .chart-card {
      height: 400px;
    }
    mat-tab-group {
      margin-top: 24px;
    }
  `],
  standalone: true,
  imports: [
    CommonModule,
    BaseChartDirective,
    MatCardModule,
    MatTabsModule,
    RouterModule
  ]
})
export class AdminDashboardComponent implements OnInit {
  stats: DashboardStats | null = null;

  revenueChartData: ChartConfiguration<'line'>['data'] = {
    labels: [],
    datasets: [{
      label: 'Aylık Gelir',
      data: [],
      borderColor: '#1976d2',
      tension: 0.1
    }]
  };

  orderStatusChartData: ChartConfiguration<'doughnut'>['data'] = {
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: [
        '#1976d2',
        '#388e3c',
        '#f57c00',
        '#d32f2f',
        '#7b1fa2'
      ]
    }]
  };

  chartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false
  };

  constructor(private adminService: AdminService) {}

  ngOnInit(): void {
    this.loadDashboardStats();
  }

  private loadDashboardStats(): void {
    this.adminService.getDashboardStats().subscribe(stats => {
      this.stats = stats;
      this.updateCharts();
    });
  }

  private updateCharts(): void {
    if (this.stats) {
      // Update revenue chart
      this.revenueChartData.labels = this.stats.revenueByMonth.map(item => item.month);
      this.revenueChartData.datasets[0].data = this.stats.revenueByMonth.map(item => item.revenue);

      // Update order status chart
      this.orderStatusChartData.labels = this.stats.ordersByStatus.map(item => item.status);
      this.orderStatusChartData.datasets[0].data = this.stats.ordersByStatus.map(item => item.count);
    }
  }
} 