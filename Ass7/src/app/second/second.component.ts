import { Component } from '@angular/core';

@Component({
  selector: 'app-second',
  standalone: true,
  imports: [],
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent
 { 
  public  ndisplay()
  {
    alert("vaibhavi");
  }
  public new()
  {
    alert("hello vaibhavi")
  }
}
