import { Routes } from '@angular/router';

export const STATIC_PAGES_ROUTES: Routes = [
  {
    path: 'hakkimizda',
    loadComponent: () => import('./components/about/about.component').then(m => m.AboutComponent),
    title: 'Hakkımızda - aldımgitti'
  },
  {
    path: 'kariyer',
    loadComponent: () => import('./components/career/career.component').then(m => m.CareerComponent),
    title: 'Kariyer - aldımgitti'
  },
  {
    path: 'yardim',
    loadComponent: () => import('./components/faq/faq.component').then(m => m.FaqComponent),
    title: 'Sıkça Sorulan Sorular - aldımgitti'
  },
  {
    path: 'iade-degisim',
    loadComponent: () => import('./components/return-policy/return-policy.component').then(m => m.ReturnPolicyComponent),
    title: 'İade ve Değişim - aldımgitti'
  },
  {
    path: 'kargo-takip',
    loadComponent: () => import('./components/shipping-tracking/shipping-tracking.component').then(m => m.ShippingTrackingComponent),
    title: 'Kargo Takip - aldımgitti'
  },
  {
    path: 'iletisim',
    loadComponent: () => import('./components/contact/contact.component').then(m => m.ContactComponent),
    title: 'İletişim - aldımgitti'
  },
  {
    path: 'gizlilik',
    loadComponent: () => import('./components/privacy/privacy.component').then(m => m.PrivacyComponent),
    title: 'Gizlilik Politikası - aldımgitti'
  }
]; 