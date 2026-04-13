import { Routes } from '@angular/router';
import {langGuard} from './core/i18n/lang-guard';
import {Atf} from './features/home/components/atf/atf';
export const routes: Routes = [
  {
    path: ':lang',
    canActivate: [langGuard],
    children: [
      {
        path: '',
        component: Atf
      }
    ]
  },

  {
    path: '',
    redirectTo: 'de',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: 'de'
  }
];
