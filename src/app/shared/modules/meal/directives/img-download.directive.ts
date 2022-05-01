import {AfterViewInit, Directive, ElementRef, HostListener, Inject, Input } from '@angular/core';
import * as htmlToImage from 'html-to-image';
import { DOCUMENT } from '@angular/common';
import { of } from "rxjs";

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
    this.convertedEl = this.elRef.nativeElement.parentElement.parentElement.parentElement.querySelector('#instructions-ingredients-container');
  }

  @HostListener('click') onConvertHTMLToPNG() {
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
