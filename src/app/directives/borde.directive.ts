import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBorde]'
})
export class BordeDirective {

  constructor(private el: ElementRef) {}

  @HostListener('mouseenter')
  onmouseenter() {
     this.setBorder('5px solid red');
  }

  @HostListener('mouseleave')
  onmouseout() {
    this.setBorder('5px solid transparent');
 }

  public setBorder(typeborder: string) {
    this.el.nativeElement.style.border = typeborder;
  }

}
