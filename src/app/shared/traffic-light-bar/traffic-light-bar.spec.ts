import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrafficLightBar } from './traffic-light-bar';
import {getTranslocoModule} from '../../../testing/transloco-testing/transloco-testing.module';

describe('TrafficLightBar', () => {
  let component: TrafficLightBar;
  let fixture: ComponentFixture<TrafficLightBar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        getTranslocoModule(),
        TrafficLightBar
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(TrafficLightBar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
