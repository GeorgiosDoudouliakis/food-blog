/* Place your angular imports here */
import { AfterViewInit, Directive, ElementRef, HostListener, Inject, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Directive({
  standalone: true,
  selector: '[toggleMenu]'
})
export class ToggleMenuDirective implements AfterViewInit {
  private _nav: HTMLElement | null;

  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private _elRef: ElementRef,
    private _renderer: Renderer2,
  ) { }

  public ngAfterViewInit(): void {
    this._nav = this._document.querySelector('nav');
  }

  @HostListener('click') public onClick(): void {
    if(this._elRef.nativeElement.classList.contains('menu-visibility')) {
      this._renderer.removeClass(this._elRef.nativeElement, 'menu-visibility');
      this._nav?.classList.remove('open');
    } else {
      this._renderer.addClass(this._elRef.nativeElement, 'menu-visibility');
      this._nav?.classList.add('open');
    }
  }
}
