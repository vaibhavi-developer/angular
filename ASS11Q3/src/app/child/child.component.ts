import { Component } from '@angular/core';
import { NumberService } from '../number.service';
import { StringService } from '../string.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css',
  providers:[NumberService,StringService]
})
export class ChildComponent
 {
public result;
public count;

  constructor(private obj:NumberService,private obj1:StringService)
  {
this.result=this.obj.chkprime(17);
this.count=this.obj1.Countcaptial("VAIbhaVI");
  }

  
}
