import { AfterViewInit, Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[cardHover]'
})
export class CardHoverDirective implements AfterViewInit {
  arrow: HTMLSpanElement;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngAfterViewInit() {
    this.arrow = this.elRef.nativeElement.querySelector('span');
  }

  @HostListener('mouseover') onMouseOver() {
    this.renderer.setStyle(this.arrow, 'transform', 'translateX(8px)');
  }

  @HostListener('mouseout') onMouseOut() {
    this.renderer.removeStyle(this.arrow, 'transform');
  }
}
