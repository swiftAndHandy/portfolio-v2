import { TranslocoGlobalConfig } from '@jsverse/transloco-utils';

const config: TranslocoGlobalConfig = {
  rootTranslationsPath: 'public/i18n/',
  langs: ['de', 'en'],
  keysManager: {
    output: 'public/i18n/',
    unflat: true
  },
};

export default config;
