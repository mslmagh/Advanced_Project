import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { UserManagementComponent } from './components/user-management/user-management.component';
import { OrderManagementComponent } from './components/order-management/order-management.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BaseChartDirective } from 'ng2-charts';

const routes: Routes = [
  { path: '', component: AdminDashboardComponent },
  { path: 'users', component: UserManagementComponent },
  { path: 'orders', component: OrderManagementComponent }
];

@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    RouterModule.forChild(routes),
    MatTabsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    BaseChartDirective,
    AdminDashboardComponent,
    UserManagementComponent,
    OrderManagementComponent
  ]
})
export class AdminModule { } 