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
  mouseX = signal(0);
  mouseY = signal(0);

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    this.mouseX.set(event.offsetX);
    this.mouseY.set(event.offsetY);
  }
}
