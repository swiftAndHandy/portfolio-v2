import {Component, inject, input, signal, viewChild} from '@angular/core';
import {Project} from '../../../../core/interfaces/project';
import {Overlay} from '../../../../shared/overlay/overlay';
import {LangService} from '../../../../core/i18n/lang.service';
import {TrafficLightBar} from '../../../../shared/traffic-light-bar/traffic-light-bar';
import {ProjectDetail} from '../project-detail/project-detail';

@Component({
  selector: 'app-project-card',
  imports: [
    TrafficLightBar,
    Overlay,
    ProjectDetail
  ],
  templateUrl: './project-card.html',
  styleUrls: ['./project-card.css', '../tags.css'],
})
export class ProjectCard {

  public project = input.required<Project>();
  protected isCollapsed = signal(false);
  protected langService = inject(LangService);

}
