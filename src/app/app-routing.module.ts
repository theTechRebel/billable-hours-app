import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NewTimeCardComponent } from './components/new-time-card/new-time-card.component';
import { TimetableComponent } from './components/timetable/timetable.component';
import { ViewTimeCardComponent } from './components/view-time-card/view-time-card.component';
import { TimeCardsComponent } from './components/time-cards/time-cards.component';
import { EditTimeCardComponent } from './components/edit-time-card/edit-time-card.component';


const routes: Routes = [
  { path: '',   component: LoginComponent},
  { path: 'login',   component: LoginComponent},
  { path: 'time_table',   component: TimetableComponent},
  {path: 'new_time_card', component: NewTimeCardComponent},
  {path: 'time_cards', component: TimeCardsComponent},
  {path: 'view_time_card/:id', component: ViewTimeCardComponent},
  {path: 'edit_time_card/:id', component: EditTimeCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true,scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
