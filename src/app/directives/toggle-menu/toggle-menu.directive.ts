/* Place your angular imports here */
import { AfterViewInit, Directive, ElementRef, HostListener, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  standalone: true,
  selector: '[toggleMenu]'
})
export class ToggleMenuDirective implements AfterViewInit {
  private nav: HTMLElement | null;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private elRef: ElementRef,
    private renderer: Renderer2,
  ) { }

  ngAfterViewInit(): void {
    this.nav = this.document.querySelector('nav');
  }

  @HostListener('click') onClick() {
    if(this.elRef.nativeElement.classList.contains('menu-visibility')) {
      this.renderer.removeClass(this.elRef.nativeElement, 'menu-visibility');
      this.nav?.classList.remove('open');
    } else {
      this.renderer.addClass(this.elRef.nativeElement, 'menu-visibility');
      this.nav?.classList.add('open');
    }
  }
}
