import {Component, computed, signal} from '@angular/core';
import {projects} from './projects.data';
import {ProjectCard} from './components/project-card/project-card';
import {TranslocoDirective} from '@jsverse/transloco';

@Component({
  selector: 'app-projects',
  imports: [
    ProjectCard,
    TranslocoDirective
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  protected readonly projects = projects;

  protected readonly filterOptions: ('frontend' | 'backend' | 'both')[] = ['frontend', 'backend', 'both'];

  protected readonly activeFilter =
    signal<'frontend' | 'backend' | 'both'>('both');

  protected readonly filteredProjects = computed(() => {
    return this.activeFilter() === 'both'
      ? projects
      : projects.filter(project => project.category === this.activeFilter());
  });


}
