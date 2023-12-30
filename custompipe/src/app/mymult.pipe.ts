import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mymult',
  standalone: true
})
export class MymultPipe implements PipeTransform {

  transform(value: number, mult=1): number
  {
    return value*mult;
  }

}
