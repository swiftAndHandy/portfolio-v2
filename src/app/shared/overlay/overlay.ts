import {Component, contentChild, effect, ElementRef, input, signal, viewChild} from '@angular/core';
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

  isFullscreen = signal(false);
  ariaLabel = input('');

  open() { this.dialogRef()?.nativeElement.showModal(); }
  close() { this.dialogRef()?.nativeElement.close(); }

  toggleFullscreen() {
    this.dialogRef()?.nativeElement.classList.toggle('is-fullscreen');
    this.isFullscreen.update(v => !v);
  }

  openFullscreen() {
    this.dialogRef()?.nativeElement.classList.add('is-fullscreen');
    this.isFullscreen.set(true);
  }
}
