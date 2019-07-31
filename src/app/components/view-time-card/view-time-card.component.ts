import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-view-time-card',
  templateUrl: './view-time-card.component.html',
  styleUrls: ['./view-time-card.component.css']
})
export class ViewTimeCardComponent implements OnInit {
  timecardID;
  timeCard;
  constructor(private http: HttpClient, private route: ActivatedRoute,private router: Router, private api: ApiService) { }

  ngOnInit() {
    this.timecardID = this.route.snapshot.params.id;
    console.log(this.timecardID);

    /*this.api.getTimeCardById(this.timecardID)
      .subscribe((data)=>{
        this.timeCard = data;
      },
      error=>{
        console.log(error);
      });*/
  }

   editCard():void{
      this.router.navigate(['/edit_time_card/'+this.timecardID], {
        skipLocationChange: true, 
    });
   }

   viewCards():void{
     this.router.navigate(['/time_cards'],{
        skipLocationChange:true,       
     });
   }

}
