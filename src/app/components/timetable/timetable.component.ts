import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.css']
})
export class TimetableComponent implements OnInit {
  table;
  constructor(private api:ApiService) {
   }

  ngOnInit() {
    /*this.api.getTimeTable().subscribe((data)=>{
      this.table = data;
    },error=>{
      console.log(error)
    })*/
  }

}
