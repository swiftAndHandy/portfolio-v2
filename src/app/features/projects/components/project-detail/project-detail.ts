import {Component, computed, inject, input} from '@angular/core';
import {Project} from '../../../../core/interfaces/project';
import {TranslocoDirective} from '@jsverse/transloco';
import {LangService} from '../../../../core/i18n/lang.service';
import {ExternalLinkIcon} from '../../../../shared/icons/external-link';

@Component({
  selector: 'app-project-detail',
  imports: [
    TranslocoDirective,
    ExternalLinkIcon
  ],
  templateUrl: './project-detail.html',
  styleUrls: ['./project-detail.css', '../tags.css'],
})
export class ProjectDetail {
  public project = input.required<Project>();
  protected langService = inject(LangService);

  protected formattedDescription = computed(() => {
    const text = this.project().longDescription[this.langService.currentLang()];
    return text
      .split('\n\n')
      .map((p, i) => {
        return `<p${i === 0 ? ' class="--remove-margin-block-start"' : ''}>${p.replace(/\n/g, '<br>')}</p>`;
      })
      .join('');
  });
}
