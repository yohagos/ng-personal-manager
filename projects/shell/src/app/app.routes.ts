import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'list',
    loadComponent: () => loadRemoteModule('mfe-employee-list', './Component').then(m => m.App),
  },
  {
    path: 'detail',
    loadComponent: () => loadRemoteModule('mfe-employee-detail', './Component').then(m => m.App),
  },
  {
    path: '**',
    redirectTo: 'list',
    pathMatch: 'full'
  }
];
