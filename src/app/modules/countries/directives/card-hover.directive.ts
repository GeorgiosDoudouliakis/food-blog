/* Place your angular imports here */
import { AfterViewInit, Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[cardHover]'
})
export class CardHoverDirective implements AfterViewInit {
  public arrow: HTMLSpanElement;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  public ngAfterViewInit(): void {
    this.arrow = this.elRef.nativeElement.querySelector('span');
  }

  @HostListener('mouseover') public onMouseOver(): void {
    this.renderer.setStyle(this.arrow, 'transform', 'translateX(8px)');
  }

  @HostListener('mouseout') public onMouseOut(): void {
    this.renderer.removeStyle(this.arrow, 'transform');
  }
}
