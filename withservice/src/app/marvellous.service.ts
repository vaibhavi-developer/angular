import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MarvellousService
 {

  constructor() { }


  getbatch()
  {
    return [
      {"Name":"PPA","Duration ":"4 month","fess":20000},
    {"Name":"LP","Duration ":"3.5 month","fess":19000},
    {"Name":"Angular","Duration ":"4 month","fess":19500},
    ];
  }
}
