import { Routes } from '@angular/router';
import {langGuard} from './core/i18n/lang-guard';
import {Home} from './features/home/home';
import {PrivacyPolicy} from './features/legal/privacy-policy';
import {LegalNotice} from './features/legal/legal-notice';
import {Projects} from './features/projects/projects';
import {Techstack} from './features/techstack/techstack';
import {ContactForm} from './features/contact-form/contact-form';
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
        path: 'contact',
        component: ContactForm
      },
      {
        path: 'projects',
        component: Projects
      },
      {
        path: 'tech-stack',
        component: Techstack
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
    pathMatch: 'full',
    redirectTo: 'de'
  },

  {
    path: '**',
    redirectTo: 'de'
  }
];
