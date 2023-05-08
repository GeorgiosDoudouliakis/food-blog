/* Place your angular imports here */
import { DOCUMENT } from '@angular/common';
import { Directive, HostListener, Inject } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[closeMenu]'
})
export class CloseMenuDirective {

  constructor(@Inject(DOCUMENT) private _document: Document) { }

  @HostListener('click') onClick() {
    this._document.querySelector('nav')?.classList.remove('open');
    this._document.querySelector('.mobile-menu-icon')?.classList.remove('menu-visibility');
  }
}
