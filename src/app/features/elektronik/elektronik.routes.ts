import { Routes } from '@angular/router';

export const ELEKTRONIK_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/elektronik.component').then(m => m.ElektronikComponent)
  }
]; 