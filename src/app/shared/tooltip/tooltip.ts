import {Component, HostListener, input, signal} from '@angular/core';

@Component({
  selector: 'app-tooltip',
  imports: [],
  templateUrl: './tooltip.html',
  styleUrl: './tooltip.css',
})
export class Tooltip {
  text = input.required<string>();
  ariaHidden = input(false);
  position = input<'bottom-trailing' | 'bottom-leading' | 'top-leading' | 'top-trailing'>('bottom-trailing');
  mouseX = signal(0);
  mouseY = signal(0);

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const rect = (event.currentTarget as HTMLElement).getBoundingClientRect();
    this.mouseX.set(event.clientX - rect.left);
    this.mouseY.set(event.clientY - rect.top);
  }
}
