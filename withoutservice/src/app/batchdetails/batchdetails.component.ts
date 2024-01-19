import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-batchdetails',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './batchdetails.component.html',
  styleUrl: './batchdetails.component.css'
})
export class BatchdetailsComponent 
{
public batches =[
  {"Name":"PPA","duration":3 ,"fees":18000},

  {"Name":"LP","duration":"3.5 month" ,"fees":185000},
  {"Name":"Angular","duration":"3 month","fees":195000},
  {"Name":"Python","duration":"4 month" ,"fees":20000},

];
}
