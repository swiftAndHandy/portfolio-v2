import {afterNextRender, Component, ElementRef, inject, Injector, input, signal, viewChild} from '@angular/core';
import {Project} from '../../../../core/interfaces/project';
import {Overlay} from '../../../../shared/overlay/overlay';
import {LangService} from '../../../../core/i18n/lang.service';
import {TrafficLightBar} from '../../../../shared/traffic-light-bar/traffic-light-bar';
import {ProjectDetail} from '../project-detail/project-detail';
import {TranslocoDirective} from '@jsverse/transloco';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-project-card',
  host: {
    '[class.collapsed]': 'isCollapsed()'
  },
  imports: [
    TrafficLightBar,
    Overlay,
    ProjectDetail,
    TranslocoDirective,
    NgOptimizedImage
  ],
  templateUrl: './project-card.html',
  styleUrls: ['./project-card.css', '../tags.css'],
})
export class ProjectCard {

  public project = input.required<Project>();
  protected isCollapsed = signal(false);
  protected langService = inject(LangService);
  private injector = inject(Injector);

  protected projectPreview = viewChild<ElementRef>('projectPreview');
  protected projectIcon = viewChild<ElementRef>('projectIcon');

  collapse() {
    this.isCollapsed.set(true);
    afterNextRender(() => {
      this.projectIcon()?.nativeElement.focus();
    }, { injector: this.injector });
  }

  launchPreview() {
    this.isCollapsed.set(false);
    afterNextRender(() => {
      this.projectPreview()?.nativeElement.focus();
    }, { injector: this.injector });
  }

}
