import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,ButtonsModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent
 {
  //title = 'form';
  //checkModel: { left?: boolean; middle?: boolean; right?: boolean } = { left: false, middle: true, right: false };
}

