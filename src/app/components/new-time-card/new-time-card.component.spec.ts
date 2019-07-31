import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NewTimeCardComponent } from './new-time-card.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { FormBuilder, ReactiveFormsModule, FormsModule} from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { DebugElement } from '@angular/core';

describe('NewTimeCardComponent', () => {
  let component: NewTimeCardComponent;
  let fixture: ComponentFixture<NewTimeCardComponent>;
  let service: ApiService;
  let spy: jasmine.Spy;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, HttpClientModule,ReactiveFormsModule,FormsModule],
      providers:[FormBuilder,{provide:ApiService}],
      declarations: [ NewTimeCardComponent ]
    })
    .compileComponents()
    .then(()=>{
      fixture = TestBed.createComponent(NewTimeCardComponent);
      component = fixture.componentInstance;
      de = fixture.debugElement;
      service = de.injector.get(ApiService);
      //spy = spyOn(service,'getTimeCardById').and.returnValue(new Observable<TimeCards>());
      fixture.detectChanges();
    })
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
