import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({ name: 'keephtml', pure: false })
export class EscapeHtmlPipeComponent implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(content) {
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}
