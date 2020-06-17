import { Component, OnInit} from '@angular/core';
import { MeetingService } from 'src/app/services/meeting.service';
import { AngularFireDatabase } from '@angular/fire/database';
import { NotificationService } from 'src/app/services/notification.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.scss']
})



export class AddEventsComponent implements OnInit {

  constructor(public service : MeetingService, private db : AngularFireDatabase,
    private notificationService : NotificationService,
    public dialogRef : MatDialogRef<AddEventsComponent>) { }

  ngOnInit(): void { }
  
  onClear() {
    this.service.form.reset();
    this.service.initializeFormGroup();
    this.dialogRef.close();
  }
  onSubmit () {
    if (this.service.form.valid) {
      if(! this.service.form.get('$key').value) 
        this.service.InsertMeeting(this.service.form.value);
        else 
        this.service.UpdateMeeting(this.service.form.value);
        this.service.form.reset();
        this.service.initializeFormGroup();
        this.notificationService.success("Enregister avec succès !");
        this.onClear();
    }
  }
  
  get minValue() {
    const val=new Date();
    val.setHours(0);
    val.setMinutes(0);
    return val;
  }
  get maxValue() {
    const val=new Date();
    val.setHours(23);
    val.setMinutes(30);
    return val;
  }

}
