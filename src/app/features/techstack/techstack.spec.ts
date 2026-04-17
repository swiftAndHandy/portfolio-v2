import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Techstack } from './techstack';
import {getTranslocoModule} from '../../../testing/transloco-testing/transloco-testing.module';

describe('Techstack', () => {
  let component: Techstack;
  let fixture: ComponentFixture<Techstack>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        getTranslocoModule(),
        Techstack
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(Techstack);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
