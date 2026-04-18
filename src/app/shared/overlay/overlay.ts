import {
  Component,
  contentChild,
  DOCUMENT,
  ElementRef,
  inject,
  input,
  signal,
  viewChild
} from '@angular/core';

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

  private doc = inject(DOCUMENT);
  private dialogRef = viewChild<ElementRef<HTMLDialogElement>>('dialog');

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
        el.style.left = `${((this.doc.defaultView?.innerWidth ?? 0) - w) / 2}px`;
        el.style.top = `${((this.doc.defaultView?.innerHeight ?? 0) - h) / 2}px`;
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
        left: `${((this.doc.defaultView?.innerWidth ?? 0) - w) / 2}px`,
        top: `${((this.doc.defaultView?.innerHeight ?? 0) - h) / 2}px`,
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

  startDrag(event: PointerEvent) {
    event.preventDefault();
    const el = this.dialogRef()!.nativeElement;
    const startX = event.clientX;
    const startY = event.clientY;
    const startL = parseFloat(el.style.left);
    const startT = parseFloat(el.style.top);

    el.style.transition = 'none';

    const onMove = (e: PointerEvent) => {
      const minVisible = 0.1;
      const minLeft = -(el.offsetWidth * (1 - minVisible));
      const maxLeft = (this.doc.defaultView?.innerWidth ?? 0) - el.offsetWidth * minVisible;
      const minTop = 0;
      const maxTop = (this.doc.defaultView?.innerHeight ?? 0) - el.offsetHeight * minVisible;

      el.style.left = `${Math.max(minLeft, Math.min(maxLeft, startL + (e.clientX - startX)))}px`;
      el.style.top = `${Math.max(minTop, Math.min(maxTop, startT + (e.clientY - startY)))}px`;
    };

    const onUp = () => {
      el.style.transition = '';
      this.doc.defaultView?.removeEventListener('pointermove', onMove);
      this.doc.defaultView?.removeEventListener('pointerup', onUp);
    };

    this.doc.defaultView?.addEventListener('pointermove', onMove);
    this.doc.defaultView?.addEventListener('pointerup', onUp);
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

      if (direction.includes('e')) {
        const maxW = (this.doc.defaultView?.innerWidth ?? 0) - parseFloat(el.style.left);
        el.style.width = `${Math.min(maxW, Math.max(200, startW + dx))}px`;
      }
      if (direction.includes('s')) {
        const maxH = (this.doc.defaultView?.innerHeight ?? 0) - parseFloat(el.style.top);
        el.style.height = `${Math.min(maxH, Math.max(200, startH + dy))}px`;
      }
      if (direction.includes('w')) {
        const newW = Math.min(startL + startW, Math.max(200, startW - dx));
        el.style.width = `${newW}px`;
        el.style.left = `${Math.max(0, startL + (startW - newW))}px`;
      }
      if (direction.includes('n')) {
        const newH = Math.min(startT + startH, Math.max(200, startH - dy));
        el.style.height = `${newH}px`;
        el.style.top = `${Math.max(0, startT + (startH - newH))}px`;
      }
    };

    const onUp = () => {
      el.style.transition = '';
      this.doc.defaultView?.removeEventListener('pointermove', onMove);
      this.doc.defaultView?.removeEventListener('pointerup', onUp);
    };

    this.doc.defaultView?.addEventListener('pointermove', onMove);
    this.doc.defaultView?.addEventListener('pointerup', onUp);
  }
}
