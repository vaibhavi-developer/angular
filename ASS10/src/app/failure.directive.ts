import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFailure]',
  standalone: true
})
export class FailureDirective {

  constructor(private obj : ElementRef) 
  { 
    this.obj.nativeElement.style.backgroundColor = 'black';
  }


  @HostListener('mouseenter') onmouseleave()
  {
      this.obj.nativeElement.style.color = 'red';
  }
  /*
@HostListener('mouseleave') onmouseenter()
{
  this.obj.nativeElement.style.background ="black";
}*/
}
