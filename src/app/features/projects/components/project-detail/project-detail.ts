import {Component, input} from '@angular/core';
import {Project} from '../../../../core/interfaces/project';

@Component({
  selector: 'app-project-detail',
  imports: [],
  templateUrl: './project-detail.html',
  styleUrls: ['./project-detail.css', '../tags.css'],
})
export class ProjectDetail {
  public project = input.required<Project>();
}
