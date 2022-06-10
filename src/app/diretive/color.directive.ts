import {Directive, ElementRef, HostBinding, HostListener, Input, Renderer2} from '@angular/core';

@Directive({
  selector: '[colorType]'
})
export class ColorDirective {

  @Input('colorType') set color(isChanged: boolean) {
    if(isChanged) {
      this.r.setStyle(this.el.nativeElement, 'color', '#40ef24')
    } else {
      this.r.setStyle(this.el.nativeElement, 'color', '#663C3C')
    }
  }

  constructor(private el: ElementRef,
              private r: Renderer2) {
  }
}
