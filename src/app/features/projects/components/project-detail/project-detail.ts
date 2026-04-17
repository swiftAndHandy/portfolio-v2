import {Component, input} from '@angular/core';
import {Project} from '../../../../core/interfaces/project';
import {TranslocoDirective} from '@jsverse/transloco';

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
}
