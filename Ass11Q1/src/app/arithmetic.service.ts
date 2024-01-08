import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArithmeticService
 {

  constructor() { }

  Add(a:number,b:number):number
  {let c;
    c=a+b;
    return c;
  }

  Sub(a:number,b:number)
  {
    let c= a-b;
    return c;
  }
  
}
