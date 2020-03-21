import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './main-page/dashboard.component';
import {AdminComponent} from './main-page/dashboard/admin/admin.component';
import {MailBoxComponent} from './mail-box/mail-box.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './event-card/events/events.component';
import {MembersComponent} from './members/members.component';

const routes: Routes = [
  {
    path : 'login',
    component : LoginComponent
  },
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
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
