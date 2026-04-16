import { Component } from '@angular/core';
import {projects} from './projects.data';
import {ProjectCard} from './components/project-card/project-card';

@Component({
  selector: 'app-projects',
  imports: [
    ProjectCard
  ],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  protected readonly projects = projects;
}
