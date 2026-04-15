import {afterNextRender, Component, DestroyRef, ElementRef, inject, signal, viewChild} from '@angular/core';
import {LangService} from '../../core/i18n/lang.service';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {TranslocoDirective} from '@jsverse/transloco';
import {ColorSchemeService} from '../../core/theming/color-scheme.service';
import {SunIcon} from '../../shared/icons/sun';
import {MoonIcon} from '../../shared/icons/moon';
import {LangMenu} from './lang-menu/lang-menu';

@Component({
  selector: 'app-header',
  imports: [RouterLink, TranslocoDirective, RouterLinkActive, SunIcon, MoonIcon, LangMenu],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private langService = inject(LangService);
  private destroyRef = inject(DestroyRef);
  protected colorScheme = inject(ColorSchemeService);
  private headerRef = viewChild<ElementRef>('headerEl')

  isDesktop = signal(false);

  constructor() {
    afterNextRender(() => {
      const el = this.headerRef()?.nativeElement;
      this.isDesktop.set(el.offsetWidth > 600);

      const observer = new ResizeObserver(entries => {
        this.isDesktop.set(entries[0].contentRect.width > 600);
      });
      observer.observe(el);
      this.destroyRef.onDestroy(() => observer.disconnect());
    });
  }

  toPath(path: string) {
    return this.langService.routerLinkToPath(path);
  }
}
