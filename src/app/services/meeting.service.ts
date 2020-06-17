import { Injectable } from '@angular/core';
import { FormGroup , FormControl ,  Validators} from '@angular/forms';
import {AngularFireDatabase ,AngularFireList} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class MeetingService {

  constructor(private db : AngularFireDatabase) { }

  MeetingList : AngularFireList<any>;

  form : FormGroup = new FormGroup ({
    $key : new FormControl(null),
    Titre : new FormControl('',Validators.required),
    location : new FormControl('',[Validators.minLength(3),Validators.required]),
    objet : new FormControl('',[Validators.minLength(8),Validators.required]),
    Date_debut : new FormControl('',Validators.required),
    Date_fin : new FormControl('',Validators.required),
    participants : new FormControl(''),
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      Titre : '',
      location : '',
      objet : '',
      Date_debut: '',
      Date_fin : '' ,
      participants : ''
    });
  }

  getMeetings () {
    this.MeetingList= this.db.list('Meetings');
    return this.MeetingList.snapshotChanges();
  }

  InsertMeeting (meeting) {
    this.MeetingList.push ({
      Titre : meeting.Titre,
      location : meeting.location,
      objet : meeting.objet,
      Date_debut: meeting.Date_debut,
      Date_fin : meeting.Date_fin ,
      participants : meeting.participants
    });
  }

  UpdateMeeting (meeting) {
    this.MeetingList.update(meeting.$key,{
      Titre : meeting.Titre,
      location : meeting.location,
      objet : meeting.objet,
      Date_debut: meeting.Date_debut,
      Date_fin : meeting.Date_fin ,
      participants : meeting.participants
    });
  }

  deleteMeeting ($key : string) {
    this.MeetingList.remove($key);
  }

  fillForm(meeting) {
    this.form.setValue(meeting);
  }

}
