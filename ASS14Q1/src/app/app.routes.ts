import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { TechnologyComponent } from './technology/technology.component';
import { BooksComponent } from './books/books.component';

 export const routes: Routes = [
{path:'technology',component : TechnologyComponent},
{path :'books',component:  BooksComponent}
];

@NgModule({
imports:[RouterModule.forRoot(routes)],
exports:[RouterModule]

})
 export class AppRoutingModule{}