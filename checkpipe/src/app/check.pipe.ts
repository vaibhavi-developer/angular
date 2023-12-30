import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'check',
  standalone: true
})
export class CheckPipe implements PipeTransform 
{

  transform(n: number, param :string): string
   {
    
   if (n % 2 === 0) 
      {
    return 'Even';
      } 
      else 
      {
    return 'Odd';
      }
   }


   
}
