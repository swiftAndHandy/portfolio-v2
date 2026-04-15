import {TranslocoTestingModule, TranslocoTestingOptions} from '@jsverse/transloco';
import de from '../../../public/i18n/de.json';
import en from '../../../public/i18n/en.json';
import {DEFAULT_LANG, LANGUAGES} from '../../app/core/i18n/languages';

export function getTranslocoModule(options: TranslocoTestingOptions = {}) {
  return TranslocoTestingModule.forRoot({
    langs: { de, en },
    translocoConfig: {
      availableLangs: LANGUAGES,
      defaultLang: DEFAULT_LANG
    },
    preloadLangs: true,
    ...options
  });
}
