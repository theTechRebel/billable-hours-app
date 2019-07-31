import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TimetableComponent } from './timetable.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { FormBuilder} from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { DebugElement } from '@angular/core';

describe('TimetableComponent', () => {
  let component: TimetableComponent;
  let fixture: ComponentFixture<TimetableComponent>;
  let service: ApiService;
  let spy: jasmine.Spy;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers:[FormBuilder,{provide:ApiService}],
      declarations: [ TimetableComponent ]
    })
    .compileComponents()
    .then(()=>{
      fixture = TestBed.createComponent(TimetableComponent);
      component = fixture.componentInstance;
      de = fixture.debugElement;
      service = de.injector.get(ApiService);
      fixture.detectChanges();
    })
  }));


  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
