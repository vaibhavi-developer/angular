import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TechnologyComponent } from './technology/technology.component';
import { BooksComponent } from './books/books.component';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,BooksComponent,TechnologyComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ass14Q2';
}
