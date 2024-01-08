import { Component } from '@angular/core';
import { ArithmeticService } from '../arithmetic.service';


@Component({
  selector: 'app-demo',
  standalone: true,
  imports: [],
  templateUrl: './demo.component.html',
  styleUrl: './demo.component.css',
  providers:[ArithmeticService],
})
export class DemoComponent
 {
  public  ans;
public result;
 constructor( private obj:ArithmeticService)//paramter constructor
 {
  this.ans=this.obj.Add(5,8);
  this.result=this.obj.Sub(10,3);

 }

}
