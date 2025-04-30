import { Routes } from '@angular/router';

export const KADIN_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/kadin.component').then(m => m.KadinComponent)
  }
]; 