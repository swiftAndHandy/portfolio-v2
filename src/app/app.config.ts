import {ApplicationConfig, provideBrowserGlobalErrorListeners, isDevMode, ErrorHandler} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import { TranslocoHttpLoader } from './core/i18n/transloco-loader';
import { provideTransloco } from '@jsverse/transloco';
import {apiInterceptor} from './core/http/api-interceptor';
import {GlobalErrorHandler} from './core/error/error-handler';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    provideHttpClient(
      withInterceptors([apiInterceptor])
    ), {
      provide: ErrorHandler,
      useClass: GlobalErrorHandler
    },
    provideTransloco({
      config: {
        availableLangs: ['de', 'en'],
        defaultLang: 'de',
        // Remove this option if your application doesn't support changing language in runtime.
        reRenderOnLangChange: true,
        prodMode: !isDevMode(),
      },
      loader: TranslocoHttpLoader,
    }),
  ],
};
