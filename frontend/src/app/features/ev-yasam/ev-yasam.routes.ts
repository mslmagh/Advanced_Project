import { Routes } from '@angular/router';

export const EV_YASAM_ROUTES: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/ev-yasam.component').then(m => m.EvYasamComponent)
  }
]; 