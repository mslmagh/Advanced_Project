import { Routes } from '@angular/router';

export const ACCOUNT_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/profile/profile.component').then(m => m.ProfileComponent)
  },
  {
    path: 'siparislerim',
    loadComponent: () => import('./pages/orders/orders.component').then(m => m.OrdersComponent)
  },
  {
    path: 'adreslerim',
    loadComponent: () => import('./pages/addresses/addresses.component').then(m => m.AddressesComponent)
  },
  {
    path: 'kuponlarim',
    loadComponent: () => import('./pages/coupons/coupons.component').then(m => m.CouponsComponent)
  }
]; 