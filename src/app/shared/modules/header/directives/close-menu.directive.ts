import { DOCUMENT } from '@angular/common';
import { Directive, HostListener, Inject } from '@angular/core';

@Directive({
  selector: '[closeMenu]'
})
export class CloseMenuDirective {

  constructor(@Inject(DOCUMENT) private document: Document) { }

  @HostListener('click') onClick() {
    this.document.querySelector('nav')?.classList.remove('open');
    this.document.querySelector('.mobile-menu-icon')?.classList.remove('menu-visibility');
  }
}
