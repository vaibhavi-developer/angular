import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit
{
  // Create object of event class
  @Output() public MyEvent = new EventEmitter;
 
  // Action listener for button
  /*
  public functionnew()
  {
    // Send the event to parent
    this.MyEvent.emit('Hello from child');
  }
*/
  constructor() {}
  ngOnInit()
  {}
}
