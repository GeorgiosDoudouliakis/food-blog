/* Place your angular imports here */
import {AfterViewInit, Directive, ElementRef, HostListener, Inject, Input } from '@angular/core';
import { DOCUMENT } from '@angular/common';

/* Place any other imports here */
import * as htmlToImage from 'html-to-image';

@Directive({
  selector: '[imgDownload]'
})
export class ImgDownloadDirective implements AfterViewInit {
  private _convertedEl: HTMLElement;
  @Input() public meal: string;

  constructor(
    private _elRef: ElementRef,
    @Inject(DOCUMENT) private _document: Document
  ) { }

  public ngAfterViewInit(): void {
    this._convertedEl = this._elRef.nativeElement.parentElement.parentElement.parentElement.querySelector('#instructions-ingredients-container');
  }

  @HostListener('click') public onConvertHTMLToPNG(): void {
    htmlToImage.toPng(this._convertedEl).then((dataUrl) => {
      const img = new Image();
      img.src = dataUrl;
      const anchor = this._document.createElement('a');
      anchor.href = img.src;
      anchor.download = `${this.meal}.png`;
      this._document.body.appendChild(anchor);
      anchor.click();
      this._document.body.removeChild(anchor);
    })
  }
}
