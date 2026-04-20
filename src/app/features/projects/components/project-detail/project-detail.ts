import {Component, inject, input} from '@angular/core';
import {Project} from '../../../../core/interfaces/project';
import {TranslocoDirective} from '@jsverse/transloco';
import {LangService} from '../../../../core/i18n/lang.service';

@Component({
  selector: 'app-project-detail',
  imports: [
    TranslocoDirective
  ],
  templateUrl: './project-detail.html',
  styleUrls: ['./project-detail.css', '../tags.css'],
})
export class ProjectDetail {
  public project = input.required<Project>();
  protected langService = inject(LangService);
}
