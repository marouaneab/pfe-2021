import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatBadgeModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatToolbarModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatNativeDateModule,
} from '@angular/material';
import {DashboardComponent} from './main-page/dashboard.component';
import {LayoutModule} from '@angular/cdk/layout';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {FormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {CollapseComponent} from './tools/collapse/collapse.component';
import {CollapseTitleComponent} from './tools/collapse/collapse-title/collapse-title.component';
import {CollapseContentComponent} from './tools/collapse/collapse-content/collapse-content.component';
import {AdminComponent} from './main-page/dashboard/admin/admin.component';
import {UserCardComponent} from './user-card/user-card.component';
import { MailBoxComponent } from './mail-box/mail-box.component';
import { MessageComponent } from './mail-box/message/message.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    CollapseComponent,
    CollapseTitleComponent,
    CollapseContentComponent,
    AdminComponent,
    UserCardComponent,
    MailBoxComponent,
    MessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    LayoutModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FormsModule,
    MatBadgeModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    MatExpansionModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
