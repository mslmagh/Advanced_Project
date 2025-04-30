import { Routes } from '@angular/router';

export const ERKEK_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/erkek.component').then(m => m.ErkekComponent)
  }
]; 