import {Component, input, output} from '@angular/core';
import {TranslocoDirective} from '@jsverse/transloco';

@Component({
  selector: 'app-traffic-light-bar',
  imports: [
    TranslocoDirective
  ],
  templateUrl: './traffic-light-bar.html',
  styleUrl: './traffic-light-bar.css',
})
export class TrafficLightBar {
  close = output();
  fullscreen = output();
  isFullscreen = input(true);
}
