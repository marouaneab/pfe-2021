import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './main-page/dashboard.component';
import {AdminComponent} from './main-page/dashboard/admin/admin.component';
import {MailBoxComponent} from './mail-box/mail-box.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './event-card/events/events.component';
import {MembersComponent} from './members/members.component';
import { BudgetComponent } from './commission-card/permanent-commission/budget/budget.component';
import { PedagogiqueComponent } from './commission-card/permanent-commission/pedagogique/pedagogique.component';
import { RechercheComponent } from './commission-card/permanent-commission/recherche/recherche.component';
import { SportCultureComponent } from './commission-card/permanent-commission/sport-culture/sport-culture.component';

const routes: Routes = [
  {path : 'login', component : LoginComponent},
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: AdminComponent,
      },
      {
        path: 'mailBox',
        component: MailBoxComponent
      },
      {
        path : 'events',
        component : EventsComponent
      },
      {
        path: 'member',
        component: MembersComponent
      },
      {
        path : 'commission-suivi-de-budget',
        component : BudgetComponent
      },
      {
        path : 'commission-pedagogique',
        component : PedagogiqueComponent
      },
      {
        path : 'commission-de-la-recheche-scientfique',
        component : RechercheComponent
      },
      {
        path : 'commission-sportives-et-culturelles',
        component : SportCultureComponent
      }
      
    ]
  },
  {
    path: '**',
    redirectTo: 'login',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
