import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myRev',
  standalone: true
})
export class MyRevPipe implements PipeTransform 
{

  transform(value: string): string
  {  let str ="Marvellous";
    let revstring="";
  for(let char of str)
  {
revstring=char+revstring;
  }

console.log("after rev string is "+revstring);
    return revstring
    
  }

}
