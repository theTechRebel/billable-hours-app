import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewTimeCardComponent } from './view-time-card.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule} from '@angular/common/http/testing';
import { FormBuilder} from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { DebugElement } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';

describe('ViewTimeCardComponent', () => {
  let component: ViewTimeCardComponent;
  let fixture: ComponentFixture<ViewTimeCardComponent>;
  let service: ApiService;
  let spy: jasmine.Spy;
  let de: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, HttpClientModule],
      providers:[FormBuilder,{provide:ApiService},{provide: ActivatedRoute, useValue: {
                  snapshot: { params: { id: 123 } }
                }},{provide:Router}],
      declarations: [ ViewTimeCardComponent ]
    })
    .compileComponents()
    .then(()=>{
      fixture = TestBed.createComponent(ViewTimeCardComponent);
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
