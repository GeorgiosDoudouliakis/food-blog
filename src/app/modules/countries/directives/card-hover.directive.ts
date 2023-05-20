/* Place your angular imports here */
import { AfterViewInit, Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[cardHover]'
})
export class CardHoverDirective implements AfterViewInit {
  public arrow: HTMLSpanElement;

  constructor(private _elRef: ElementRef, private _renderer: Renderer2) { }

  public ngAfterViewInit(): void {
    this.arrow = this._elRef.nativeElement.querySelector('span');
  }

  @HostListener('mouseover') public onMouseOver(): void {
    this._renderer.setStyle(this.arrow, 'transform', 'translateX(8px)');
  }

  @HostListener('mouseout') public onMouseOut(): void {
    this._renderer.removeStyle(this.arrow, 'transform');
  }
}
