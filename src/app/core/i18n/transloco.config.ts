import { TranslocoGlobalConfig } from '@jsverse/transloco-utils';
import {LANGUAGES} from './languages';

const config: TranslocoGlobalConfig = {
  rootTranslationsPath: 'public/i18n/',
  langs: LANGUAGES,
  keysManager: {},
};

export default config;
