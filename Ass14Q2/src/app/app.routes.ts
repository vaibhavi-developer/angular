import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnologyComponent } from './technology/technology.component';
import { BooksComponent } from './books/books.component';

export const routes: Routes = [

    {path:'Technology',component:TechnologyComponent},
    {path :'Books',component:BooksComponent}
];

@NgModule({
imports:[RouterModule.forRoot(routes)],
exports:[RouterModule]
})

export class AppRoutingModule{}