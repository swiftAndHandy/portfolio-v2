import {Component, contentChild, effect, ElementRef, viewChild} from '@angular/core';
import {TranslocoDirective} from '@jsverse/transloco';
import {TrafficLightBar} from '../traffic-light-bar/traffic-light-bar';

/**
 * Generic overlay component based on the native <dialog> element.
 *
 * @example
 * <app-overlay #overlay>
 *  <app-example-detail [example]=example />
 * </app-overlay>
 *
 * <button (click)=overlay.open() transloco="overlay.open" [translocoParams]={ target: targetName }></button>
 */

@Component({
  selector: 'app-overlay',
  imports: [],
  templateUrl: './overlay.html',
  styleUrl: './overlay.css',
})
export class Overlay {
  private dialogRef = viewChild<ElementRef<HTMLDialogElement>>('dialog');
  private trafficLight = contentChild(TrafficLightBar);

  open() { this.dialogRef()?.nativeElement.showModal(); }
  close() { this.dialogRef()?.nativeElement.close(); }

  toggleFullscreen() {
    this.dialogRef()?.nativeElement.classList.toggle('is-fullscreen');
  }
}
