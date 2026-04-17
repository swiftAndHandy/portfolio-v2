import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectCard } from './project-card';
import {getTranslocoModule} from '../../../../../testing/transloco-testing/transloco-testing.module';
import {projects} from '../../projects.data';

describe('ProjectCard', () => {
  let component: ProjectCard;
  let fixture: ComponentFixture<ProjectCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        getTranslocoModule(),
        ProjectCard
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectCard);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('project', projects[0]);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
