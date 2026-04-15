import {Component, inject} from '@angular/core';
import {LangService} from '../../core/i18n/lang.service';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {TranslocoDirective} from '@jsverse/transloco';

@Component({
  selector: 'app-header',
  imports: [
    RouterLink,
    TranslocoDirective,
    RouterLinkActive
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private langService = inject(LangService)

  toPath(path: string) {
    return this.langService.routerLinkToPath(path);
  }
}
