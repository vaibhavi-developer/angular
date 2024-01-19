import { RouterModule, Routes } from '@angular/router';
import { BatchesComponent } from './batches/batches.component';
import { SubjectComponent } from './subject/subject.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [

{path :'vaibhavi', component:BatchesComponent,},
{path :'sub',component:SubjectComponent},
//default
{path:'',component:BatchesComponent}


];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{}