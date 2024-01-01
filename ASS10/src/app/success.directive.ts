import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSuccess]',
  standalone: true
})
export class SuccessDirective 
{

  constructor( private obj:ElementRef) 
  { }
  @HostListener('mouseenter') onmouseenter()
  {
      this.obj.nativeElement.style.color="green";
  }

 
}
