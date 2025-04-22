import { Routes } from '@angular/router';

export const SUPERMARKET_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/supermarket.component').then(m => m.SupermarketComponent)
  }
]; 