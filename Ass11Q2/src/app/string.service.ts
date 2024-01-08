import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService
 {

  constructor() { }
  Countcapital(str:string)
  { 
    var upercase=0;
    for(var i=0;i<str.length;i++)
    {

     if( str[i]>="A" && str[i]<="Z")
      upercase++;
    }
    console.log("uppercase count is"+upercase);
    return ("uppercase count is "+upercase);
  }
}
