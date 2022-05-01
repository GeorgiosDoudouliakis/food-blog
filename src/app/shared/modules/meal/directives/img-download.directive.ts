import {AfterViewInit, Directive, ElementRef, HostListener, Inject, Input } from '@angular/core';
import * as htmlToImage from 'html-to-image';
import { DOCUMENT } from '@angular/common';

@Directive({
  selector: '[imgDownload]'
})
export class ImgDownloadDirective implements AfterViewInit {
  private convertedEl: HTMLElement;
  @Input() meal: string;

  constructor(
    private elRef: ElementRef,
    @Inject(DOCUMENT) private document: Document
  ) { }

  ngAfterViewInit() {
    this.convertedEl = this.elRef.nativeElement.parentElement.parentElement.parentElement;
  }

  @HostListener('click') onPdfDownload() {
    htmlToImage.toPng(this.convertedEl).then((dataUrl) => {
      const img = new Image();
      img.src = dataUrl;
      const anchor = this.document.createElement('a');
      anchor.href = img.src;
      anchor.download = `${this.meal}.png`;
      this.document.body.appendChild(anchor);
      anchor.click();
      this.document.body.removeChild(anchor);
    })
  }
}
