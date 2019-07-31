import { async, ComponentFixture, TestBed, inject, getTestBed } from '@angular/core/testing';
import { EditTimeCardComponent } from './edit-time-card.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { FormBuilder, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ActivatedRoute} from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { DebugElement } from '@angular/core';
import { Observable } from 'rxjs';
import { TimeCards } from 'src/app/models/time-cards';

describe('EditTimeCardComponent', () => {
  let component: EditTimeCardComponent;
  let fixture: ComponentFixture<EditTimeCardComponent>;
  let service: ApiService;
  let spy: jasmine.Spy;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, HttpClientModule,ReactiveFormsModule,FormsModule],
      providers:[{provide: ActivatedRoute, useValue: {
                  snapshot: { params: { id: 123 } }
                }},
                  FormBuilder,
                {provide:ApiService}],
      declarations: [ EditTimeCardComponent ]
    })
    .compileComponents()
    .then(()=>{
      fixture = TestBed.createComponent(EditTimeCardComponent);
      component = fixture.componentInstance;
      de = fixture.debugElement;
      service = TestBed.get(ApiService);
      fixture.detectChanges();
    })
  }));


  it('should create',
    () => {
      expect(component).toBeTruthy();
  });
});
