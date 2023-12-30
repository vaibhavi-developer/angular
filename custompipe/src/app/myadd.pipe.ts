import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mYADD',
  standalone: true
})
export class MYADDPipe implements PipeTransform 
{

  transform(value: number, Param:number): number
  { 
    return value + Param;
    
  }

}
