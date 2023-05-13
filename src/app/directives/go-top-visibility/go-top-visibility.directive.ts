/* Place your angular imports here */
import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[goTopVisibility]',
  providers: [
    {
      provide: Window,
      useValue: window
    }
  ]
})
export class GoTopVisibilityDirective {
  constructor(private _elRef: ElementRef, private _renderer: Renderer2, private _window: Window) { }

  @HostListener('window: scroll') public onScroll(): void {
    if(this._window.scrollY > 150) {
      this._renderer.addClass(this._elRef.nativeElement, 'show');
    } else {
      this._renderer.removeClass(this._elRef.nativeElement, 'show');
    }
  }

  @HostListener('click') public onClick(): void {
    this._window.scrollTo(0, 0);
  }
}
