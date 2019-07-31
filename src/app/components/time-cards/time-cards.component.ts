import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-time-cards',
  templateUrl: './time-cards.component.html',
  styleUrls: ['./time-cards.component.css']
})
export class TimeCardsComponent implements OnInit {
  table;
  constructor(private api:ApiService,private router: Router) {
    /*this.api.getTimeCards().subscribe(
      data=>{
        console.log(data);
        this.table=data;
      },
      error=>{
        console.log(error);
      }
    )*/
   }

  ngOnInit() {
  }

   viewCard(data:any):void{
    let id = this.table.indexOf(data)+1;
    if(id !== -1){
      this.router.navigate(['/view_time_card/'+id], {
        skipLocationChange: true,
    });
    }
   }
}
