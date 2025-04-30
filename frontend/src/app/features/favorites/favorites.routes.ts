import { Routes } from '@angular/router';

export const FAVORITES_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/favorites.component').then(m => m.FavoritesComponent)
  }
]; 