import { Routes } from '@angular/router';

export const KOZMETIK_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/kozmetik.component').then(m => m.KozmetikComponent)
  }
]; 