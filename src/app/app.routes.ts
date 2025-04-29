import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent 
  },
  {
    path: 'kadin',
    loadChildren: () => import('./features/kadin/kadin.routes').then(m => m.KADIN_ROUTES)
  },
  {
    path: 'erkek',
    loadChildren: () => import('./features/erkek/erkek.routes').then(m => m.ERKEK_ROUTES)
  },
  {
    path: 'anne-cocuk',
    loadChildren: () => import('./features/anne-cocuk/anne-cocuk.routes').then(m => m.ANNE_COCUK_ROUTES)
  },
  {
    path: 'ev-yasam',
    loadChildren: () => import('./features/ev-yasam/ev-yasam.routes').then(m => m.EV_YASAM_ROUTES)
  },
  {
    path: 'supermarket',
    loadChildren: () => import('./features/supermarket/supermarket.routes').then(m => m.SUPERMARKET_ROUTES)
  },
  {
    path: 'kozmetik',
    loadChildren: () => import('./features/kozmetik/kozmetik.routes').then(m => m.KOZMETIK_ROUTES)
  },
  {
    path: 'ayakkabi-canta',
    loadChildren: () => import('./features/ayakkabi-canta/ayakkabi-canta.routes').then(m => m.AYAKKABI_CANTA_ROUTES)
  },
  {
    path: 'elektronik',
    loadChildren: () => import('./features/elektronik/elektronik.routes').then(m => m.ELEKTRONIK_ROUTES)
  },
  {
    path: 'cart',
    loadChildren: () => import('./features/cart/cart.routes').then(m => m.CART_ROUTES)
  },
  {
    path: 'profile',
    loadChildren: () => import('./features/profile/profile.routes').then(m => m.PROFILE_ROUTES)
  },
  {
    path: 'favorites',
    loadChildren: () => import('./features/favorites/favorites.routes').then(m => m.FAVORITES_ROUTES)
  },
  { 
    path: '**', 
    redirectTo: '' 
  }
];
