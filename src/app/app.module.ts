import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TimetableComponent } from './components/timetable/timetable.component';
import { NewTimeCardComponent } from './components/new-time-card/new-time-card.component';
import { ViewTimeCardComponent } from './components/view-time-card/view-time-card.component';
import { HttpClientModule } from '@angular/common/http';
import { TimeCardsComponent } from './components/time-cards/time-cards.component';
import { EditTimeCardComponent } from './components/edit-time-card/edit-time-card.component';

@NgModule({
  declarations: [ 
    AppComponent,
    LoginComponent,
    TimetableComponent,
    NewTimeCardComponent,
    ViewTimeCardComponent,
    TimeCardsComponent,
    EditTimeCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
