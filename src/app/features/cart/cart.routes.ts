import { Routes } from '@angular/router';

export const CART_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/cart.component').then(m => m.CartComponent)
  }
]; 