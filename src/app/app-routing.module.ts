import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardComponent} from './main-page/dashboard.component';
import {AdminComponent} from './main-page/dashboard/admin/admin.component';
import {MailBoxComponent} from './mail-box/mail-box.component';


const routes: Routes = [
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
