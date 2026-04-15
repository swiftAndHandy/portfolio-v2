import {Component, inject} from '@angular/core';
import {LangService} from '../../core/i18n/lang.service';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {TranslocoDirective} from '@jsverse/transloco';
import {GlobeIcon} from '../../shared/icons/globe';
import {ChevronDownIcon} from '../../shared/icons/chevron-down';
import {ColorSchemeService} from '../../core/theming/color-scheme.service';
import {LANGUAGES} from '../../core/i18n/languages';
import {SunIcon} from '../../shared/icons/sun';
import {MoonIcon} from '../../shared/icons/moon';
import {LangMenu} from './lang-menu/lang-menu';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    TranslocoDirective,
    RouterLinkActive,
    SunIcon,
    MoonIcon,
    LangMenu
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private langService = inject(LangService);
  protected colorScheme = inject(ColorSchemeService);

  toPath(path: string) {
    return this.langService.routerLinkToPath(path);
  }
}
