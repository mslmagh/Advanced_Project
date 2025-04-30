import { Routes } from '@angular/router';

export const ANNE_COCUK_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/anne-cocuk.component').then(m => m.AnneCocukComponent)
  }
]; 