import {CanActivateFn, Router} from '@angular/router';
import {DOCUMENT, inject} from '@angular/core';
import {TranslocoService} from '@jsverse/transloco';
import {DEFAULT_LANG, LANGUAGES} from './languages';

export const langGuard: CanActivateFn = (route, state) => {
  const transloco = inject(TranslocoService)
  const router = inject(Router)

  const doc = inject(DOCUMENT)
  const lang = route.params['lang'];

  if (!LANGUAGES.includes(lang)) {
    router.navigateByUrl(`/${DEFAULT_LANG}`);
    return false;
  }

  transloco.setActiveLang(lang);
  doc.documentElement.lang = transloco.getActiveLang();
  return true;
};
