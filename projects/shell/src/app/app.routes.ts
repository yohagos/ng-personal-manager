import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'list',
    loadComponent: () => loadRemoteModule('mfe-employee-list', './Component').then(m => m.App),
  },
  {
    path: 'add',
    loadComponent: () => loadRemoteModule('mfe-employee-add', './Component').then(m => m.App),
  },
  {
    path: '**',
    redirectTo: 'list',
    pathMatch: 'full'
  }
];
