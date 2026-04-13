import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';
import {TranslocoService} from '@jsverse/transloco';
import {DEFAULT_LANG, LANGUAGES} from './languages';

export const langGuard: CanActivateFn = (route, state) => {
  const transloco = inject(TranslocoService)
  const router = inject(Router)

  const lang = route.params['lang'];

  if (!LANGUAGES.includes(lang)) {
    router.navigateByUrl(`/${DEFAULT_LANG}`);
    return false;
  }

  transloco.setActiveLang(lang);
  document.documentElement.lang = transloco.getActiveLang();
  return true;
};
