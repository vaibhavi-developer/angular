import { Component } from '@angular/core';
import { SecondComponent } from '../second/second.component';

@Component({
  selector: 'app-firstcomp',
  standalone: true,
  imports: [SecondComponent],
  templateUrl: './firstcomp.component.html',
  styleUrl: './firstcomp.component.css'
})
export class FirstcompComponent {

}
