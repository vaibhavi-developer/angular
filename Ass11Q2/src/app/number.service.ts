import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NumberService 
{
 constructor() { }

   chkprime(no:number)
 {
    for(let i=2;i<=no/2;i++)
      {
        if(no%i!=0)
        continue;
      else
      //console.log(no+"is  not prime");

      return (no+"no is not prime");

      }
      //console.log(no+"is prime");
      return (no +"is prime")
      
 }
}
 
