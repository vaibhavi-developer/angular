import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarvellousService } from '../marvellous.service';

@Component({
  selector: 'app-batchlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batchlist.component.html',
  styleUrl: './batchlist.component.css',
  providers:[MarvellousService]
})
export class BatchlistComponent 
{
  public batches : any=[];
 constructor( private obj :MarvellousService)//paramter constructor
 {
  this.batches=this.obj.getbatch()

 }

}
