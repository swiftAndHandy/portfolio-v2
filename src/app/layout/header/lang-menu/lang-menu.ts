import {Component, inject} from '@angular/core';
import {LANGUAGES} from '../../../core/i18n/languages';
import {TranslocoDirective, TranslocoService} from '@jsverse/transloco';
import {Router} from '@angular/router';
import {LangService} from '../../../core/i18n/lang.service';
import {Location} from '@angular/common';
import {ChevronDownIcon} from '../../../shared/icons/chevron-down';
import {GlobeIcon} from '../../../shared/icons/globe';

@Component({
  selector: 'app-lang-menu',
  imports: [
    ChevronDownIcon,
    GlobeIcon,
    TranslocoDirective
  ],
  templateUrl: './lang-menu.html',
  styleUrl: './lang-menu.css',
})
export class LangMenu {
  private langService = inject(LangService);
  private translocoService = inject(TranslocoService);
  private router = inject(Router);
  private location = inject(Location);

  protected languages = LANGUAGES;

  switchLang(lang: string) {
    const newUrl = this.router.url.replace(
      new RegExp(`/${this.langService.currentLang()}(/|$)`),
      `/${lang}$1`
    );
    this.location.replaceState(newUrl);
    this.translocoService.setActiveLang(lang);
  }
}
