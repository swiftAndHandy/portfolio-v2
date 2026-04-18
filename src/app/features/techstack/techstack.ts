import { Component } from '@angular/core';
import {TranslocoDirective} from '@jsverse/transloco';
import {skills} from './skill.data';
import {Skill} from '../../core/interfaces/skill';
import {Tooltip} from '../../shared/tooltip/tooltip';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-techstack',
  imports: [
    TranslocoDirective,
    Tooltip,
    NgOptimizedImage
  ],
  templateUrl: './techstack.html',
  styleUrl: './techstack.css',
})
export class Techstack {
  protected readonly skills: Skill[] = skills;
  protected readonly objectKeys = Object.keys;

  protected readonly groupedSkills: Record<string, Skill[]> = {
    frontend: skills.filter(skill => skill.category === 'frontend' || skill.category === 'both'),
    backend: skills.filter(skill => skill.category === 'backend' || skill.category === 'both'),
    other: skills.filter(skill => skill.category === 'other')
  };
}
