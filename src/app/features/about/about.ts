import {Component, inject} from '@angular/core';
import {RouterLink} from '@angular/router';
import { TranslocoDirective } from '@jsverse/transloco';
import {LangService} from '../../core/i18n/lang.service';
import {ExternalLinkIcon} from '../../shared/icons/external-link';

@Component({
  selector: 'app-about',
  imports: [
    TranslocoDirective,
    RouterLink,
    ExternalLinkIcon,
  ],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {
  langService = inject(LangService);

  toPath(path: string) {
    return this.langService.routerLinkToPath(path);
  }
}
