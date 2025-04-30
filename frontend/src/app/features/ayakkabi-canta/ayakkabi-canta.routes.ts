import { Routes } from '@angular/router';

export const AYAKKABI_CANTA_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/ayakkabi-canta.component').then(m => m.AyakkabiCantaComponent)
  }
]; 