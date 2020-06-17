import {BrowserModule} from '@angular/platform-browser';
import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
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
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireModule} from '@angular/fire';
import {environment} from '../environments/environment';
import {CollapseComponent} from './tools/collapse/collapse.component';
import {CollapseTitleComponent} from './tools/collapse/collapse-title/collapse-title.component';
import {CollapseContentComponent} from './tools/collapse/collapse-content/collapse-content.component';
import {AdminComponent} from './main-page/dashboard/admin/admin.component';
import {UserCardComponent} from './user-card/user-card.component';
import {MatCheckboxModule} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatMenuModule} from '@angular/material/menu';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatChipsModule} from '@angular/material/chips';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MailBoxComponent} from './mail-box/mail-box.component';
import {MessageComponent} from './mail-box/message/message.component';
import { EventCardComponent } from './event-card/event-card.component';
import { LoginComponent } from './login/login.component';
import { EventsComponent } from './event-card/events/events.component';
import { AddEventsComponent } from './event-card/add-events/add-events.component';
import { MatTimepickerModule } from 'mat-timepicker';
import { MembersComponent } from './members/members.component';
import { MemberComponent } from './members/member/member.component';
import { FilterPipe } from './pipes/filter.pipe';
import { PedagogiqueComponent } from './commission-card/permanent-commission/pedagogique/pedagogique.component';
import { BudgetComponent } from './commission-card/permanent-commission/budget/budget.component';
import { RechercheComponent } from './commission-card/permanent-commission/recherche/recherche.component';
import { SportCultureComponent } from './commission-card/permanent-commission/sport-culture/sport-culture.component';
import { MeetingsComponent } from './commission-card/meetings/meetings.component';
import { CMSMembersComponent } from './commission-card/cms-members/cms-members.component';
import { AddMemberComponent } from './commission-card/cms-members/add-member/add-member.component';
import { EditMeetingComponent } from './commission-card/meetings/edit-meeting/edit-meeting.component';
import { AddMeetingComponent } from './commission-card/meetings/add-meeting/add-meeting.component';
import { MemberService } from './services/member.service';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { MatConfirmDialogComponent } from './mat-confirm-dialog/mat-confirm-dialog.component';

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
    EventCardComponent,
    LoginComponent,
    EventsComponent,
    AddEventsComponent,
    MembersComponent,
    MemberComponent,
    FilterPipe,
    PedagogiqueComponent,
    BudgetComponent,
    RechercheComponent,
    SportCultureComponent,
    MeetingsComponent,
    CMSMembersComponent,
    AddMemberComponent,
    EditMeetingComponent,
    AddMeetingComponent,
    MatConfirmDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatCheckboxModule,
    MatButtonModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatRadioModule,
    MatSelectModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatSidenavModule,
    MatListModule,
    MatGridListModule,
    MatCardModule,
    MatStepperModule,
    MatTabsModule,
    MatExpansionModule,
    MatButtonToggleModule,
    MatChipsModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatProgressBarModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
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
    MatTimepickerModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireStorageModule
  ],
  providers: [MemberService],
  bootstrap: [AppComponent],
  entryComponents : [AddEventsComponent,AddMemberComponent,MatConfirmDialogComponent],
})
export class AppModule {
}
