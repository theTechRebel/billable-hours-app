import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { TimeCardsComponent } from './time-cards.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { ApiService } from 'src/app/services/api.service';
import { DebugElement } from '@angular/core';
import { Router } from '@angular/router';

describe('TimeCardsComponent', () => {
  let component: TimeCardsComponent;
  let fixture: ComponentFixture<TimeCardsComponent>;
  let service: ApiService;
  let spy: jasmine.Spy;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, HttpClientModule],
      providers:[{provide:ApiService},{provide:Router}],
      declarations: [ TimeCardsComponent ]
    })
    .compileComponents()
    .then(()=>{
      fixture = TestBed.createComponent(TimeCardsComponent);
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
