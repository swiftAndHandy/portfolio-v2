import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectDetail } from './project-detail';
import {getTranslocoModule} from '../../../../../testing/transloco-testing/transloco-testing.module';
import {projects} from '../../projects.data';

describe('ProjectDetail', () => {
  let component: ProjectDetail;
  let fixture: ComponentFixture<ProjectDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        getTranslocoModule(),
        ProjectDetail
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectDetail);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('project', projects[0]);
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
