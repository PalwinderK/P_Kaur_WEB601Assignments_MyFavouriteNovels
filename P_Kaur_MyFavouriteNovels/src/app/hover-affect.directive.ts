import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHoverAffect]',
})
export class HoverAffectDirective {
  constructor(private el: ElementRef) {}

  @Input() appHoverAffect = 'font-style';

  @HostListener('mouseenter') onMouseEnter() {
    if (this.appHoverAffect == 'card-border') {
      this.highlight('10px solid indigo');
    } else if (this.appHoverAffect == 'font-style') {
      this.highlight('in');
    } else {
      this.highlight('');
    }
    console.log('mouseenter');
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.appHoverAffect == 'card-border') {
      this.highlight('2px solid rgba(0,0,0,0.125)');
    } else if (this.appHoverAffect == 'font-style') {
      this.highlight('out');
    }
  }

  private highlight(value?: string) {
    if (this.appHoverAffect == 'card-border') {
      this.el.nativeElement.style.border = value;
    } else if (this.appHoverAffect == 'font-style' && value == 'in') {
      this.el.nativeElement.style.textDecoration = 'underline';
      this.el.nativeElement.style.fontWeight = 'bold';
    } else if (this.appHoverAffect == 'font-style' && value == 'out') {
      this.el.nativeElement.style.textDecoration = 'none';
      this.el.nativeElement.style.fontWeight = 'none';
    }
  }

  // [appHighlight]="color"
}
