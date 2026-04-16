import {Component, inject} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {TranslocoDirective} from "@jsverse/transloco";
import {LangService} from '../../core/i18n/lang.service';
import {LinkedInIcon} from '../../shared/icons/linkedin';

@Component({
  selector: 'app-footer',
  imports: [
    RouterLinkActive,
    TranslocoDirective,
    RouterLink,
    LinkedInIcon
  ],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  private langService = inject(LangService);
  protected year = new Date().getFullYear();

  toPath(path: string) {
    return this.langService.routerLinkToPath(path);
  }
}
