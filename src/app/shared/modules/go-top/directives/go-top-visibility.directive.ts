import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[goTopVisibility]',
  providers: [
    {
      provide: Window,
      useValue: window
    }
  ]
})
export class GoTopVisibilityDirective {

  constructor(private elRef: ElementRef, private renderer: Renderer2, private window: Window) { }

  @HostListener('window: scroll') onScroll() {
    if(this.window.scrollY > 150) {
      this.renderer.addClass(this.elRef.nativeElement, 'show');
    } else {
      this.renderer.removeClass(this.elRef.nativeElement, 'show');
    }
  }

  @HostListener('click') onClick() {
    this.window.scrollTo(0, 0);
  }
}
