import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, ValidatorFn, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-new-time-card',
  templateUrl: './new-time-card.component.html',
  styleUrls: ['./new-time-card.component.css']
})
export class NewTimeCardComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  billForm = this.fb.group({
    employeeID: ['', [Validators.required,Validators.pattern("^[1-9][0-9]")]],
    rate: ['', [Validators.required,Validators.pattern("^[1-9]*")]],
    project:['',Validators.required],
    date:['', Validators.required],
    start_time:['', Validators.required],
    end_time:['', Validators.required]
  });

    onSubmit(){
      console.log(this.billForm.value);
    }

}
