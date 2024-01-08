import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StringService 
{
    constructor() { }
    Countcaptial(str:string)
    {
      var i;
      var upper=0;
      for(i=0;i<str.length;i++)
      {
        if(str[i]>="A" && str[i]<="Z")
        upper++;
      }
      console.log("uppercase count"+upper);

      return ("uppercase count is "+upper);
      
    }
}

