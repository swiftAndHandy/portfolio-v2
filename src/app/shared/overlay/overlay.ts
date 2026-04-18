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

  private savedPosition: { left: string; top: string; width: string; height: string } | null = null;

  open() {
    const el = this.dialogRef()?.nativeElement;
    if (!el) return;
    el.showModal();

    if (!el.style.left) {
      el.style.transition = 'none';
      requestAnimationFrame(() => {
        const w = el.offsetWidth;
        const h = el.offsetHeight;
        el.style.left = `${(window.innerWidth - w) / 2}px`;
        el.style.top = `${(window.innerHeight - h) / 2}px`;
        requestAnimationFrame(() => {
          el.style.transition = '';
        });
      });
    }
  }

  close() { this.dialogRef()?.nativeElement.close(); }

  toggleFullscreen() {
    const el = this.dialogRef()?.nativeElement;
    if (!el) return;

    if (!this.isFullscreen()) {
      this.savedPosition = {
        left: el.style.left,
        top: el.style.top,
        width: el.style.width,
        height: el.style.height,
      };
      el.classList.add('is-fullscreen');
      el.style.left = '';
      el.style.top = '';
      el.style.width = '';
      el.style.height = '';
    } else {
      el.classList.remove('is-fullscreen');
      if (this.savedPosition) {
        el.style.left = this.savedPosition.left;
        el.style.top = this.savedPosition.top;
        el.style.width = this.savedPosition.width;
        el.style.height = this.savedPosition.height;
        this.savedPosition = null;
      }
    }
    this.isFullscreen.update(v => !v);
  }

  openFullscreen() {
    const el = this.dialogRef()?.nativeElement;
    if (!el) return;
    el.showModal();
    requestAnimationFrame(() => {
      const w = parseFloat(getComputedStyle(el).width);
      const h = parseFloat(getComputedStyle(el).height);

      this.savedPosition = {
        left: `${(window.innerWidth - w) / 2}px`,
        top: `${(window.innerHeight - h) / 2}px`,
        width: '',
        height: '',
      };

      el.classList.add('is-fullscreen');
      this.isFullscreen.set(true);
      el.style.left = '';
      el.style.top = '';
      el.style.width = '';
      el.style.height = '';
    });
  }

  startResize(event: PointerEvent, direction: string) {
    event.preventDefault();
    const el = this.dialogRef()!.nativeElement;

    const startX = event.clientX;
    const startY = event.clientY;
    const startW = el.offsetWidth;
    const startH = el.offsetHeight;
    const startL = parseFloat(el.style.left);
    const startT = parseFloat(el.style.top);

    el.style.transition = 'none';

    const onMove = (e: PointerEvent) => {
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;

      if (direction.includes('e')) el.style.width = `${startW + dx}px`;
      if (direction.includes('s')) el.style.height = `${startH + dy}px`;
      if (direction.includes('w')) {
        el.style.width = `${startW - dx}px`;
        el.style.left = `${startL + dx}px`;
      }
      if (direction.includes('n')) {
        el.style.height = `${startH - dy}px`;
        el.style.top = `${startT + dy}px`;
      }
    };

    const onUp = () => {
      el.style.transition = '';
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };

    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
  }
}
