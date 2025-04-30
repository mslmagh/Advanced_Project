import { Routes } from '@angular/router';
import { OrderListComponent } from '../../orders/components/order-list/order-list.component';
import { OrderDetailComponent } from '../../orders/components/order-detail/order-detail.component';

export const ORDERS_ROUTES: Routes = [
  { path: '', component: OrderListComponent },
  { path: ':id', component: OrderDetailComponent }
]; 