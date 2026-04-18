import {afterNextRender, Component, computed, inject, input, output} from '@angular/core';
import {TranslocoDirective, TranslocoService} from '@jsverse/transloco';

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
  target = input('');

  translocoService = inject(TranslocoService);

  protected resolvedTarget = computed(() =>
    this.target() || this.translocoService.translate('action.targetMissing')
  );

}
