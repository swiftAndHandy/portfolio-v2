import { Routes } from '@angular/router';
import {langGuard} from './core/i18n/lang-guard';
import {Home} from './features/home/home';
import {PrivacyPolicy} from './features/legal/privacy-policy';
import {LegalNotice} from './features/legal/legal-notice';
export const routes: Routes = [
  {
    path: ':lang',
    canActivate: [langGuard],
    children: [
      {
        path: '',
        component: Home
      },
      {
        path: 'legal',
        children: [
          {
            path: 'privacy-policy',
            component: PrivacyPolicy
          },
          {
            path: 'legal-notice',
            component: LegalNotice
          }
        ]
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
