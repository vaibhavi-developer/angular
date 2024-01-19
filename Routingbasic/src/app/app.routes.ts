import { Routes } from '@angular/router';

import { BatchdetailsComponent } from './batchdetails/batchdetails.component';
import { BatchlistComponent } from './batchlist/batchlist.component';
import { HomepageComponent } from './homepage/homepage.component';
import { InvalidpageComponent } from './invalidpage/invalidpage.component';
export const routes: Routes = [
     
    //specific route
     {path:'batchdetails',component:BatchdetailsComponent},
     {path:'batchlist',component:BatchlistComponent},
     //
     {path:'hello',component:BatchdetailsComponent},
     //default route
     {path:'',component :HomepageComponent},
     
      //wildcard or invalid or any other thing this should be at the last
      {path:'**',component:InvalidpageComponent},
];
