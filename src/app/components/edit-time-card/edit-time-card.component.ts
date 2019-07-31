import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Validators, FormBuilder,FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-edit-time-card',
  templateUrl: './edit-time-card.component.html',
  styleUrls: ['./edit-time-card.component.css']
})
export class EditTimeCardComponent implements OnInit {
  timecardID;
  timeCard;
  constructor(private route: ActivatedRoute,private fb: FormBuilder, private api: ApiService) { }
  billForm = this.fb.group({
    employeeID: ['', [Validators.required,Validators.pattern("^[1-9][0-9]")]],
    rate: ['', [Validators.required,Validators.pattern("^[1-9]*")]],
    project:['',Validators.required],
    date:['', Validators.required],
    start_time:['', Validators.required],
    end_time:['', Validators.required]
  });
  ngOnInit() {
    this.timecardID = this.route.snapshot.params.id;
    console.log(this.timecardID);

      /*
      this.api.getTimeCardById(this.timecardID)  
      .subscribe((data)=>{
        console.log(data);
        this.timeCard = data[this.timecardID];
        this.billForm.controls['employeeID'].setValue(this.timeCard.employeeID);
        this.billForm.controls['rate'].setValue(this.timeCard.rate);
        this.billForm.controls['project'].setValue(this.timeCard.project);
        this.billForm.controls['date'].setValue(this.timeCard.date);
        this.billForm.controls['start_time'].setValue(this.timeCard.start_time);
        this.billForm.controls['end_time'].setValue(this.timeCard.end_time);
      },
      error=>{
        console.log(error);
      });*/
      
  }
}
