import { Component, OnInit } from '@angular/core';
import { MemberService } from 'src/app/services/member.service';
import { Grade , Department} from 'src/app/interfaces/Member';
import * as firebase from 'firebase';
import { AngularFireDatabase } from '@angular/fire/database';
import { FormControl, FormGroup , Validators } from '@angular/forms';
import { finalize } from "rxjs/operators";
import { AngularFireStorage } from '@angular/fire/storage';
import { ImageService } from 'src/app/services/image.service';
import { NotificationService } from 'src/app/services/notification.service';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.scss']
})
export class AddMemberComponent implements OnInit {
/*
    imgSrc : string;
    selectedImage : any = null;
    isSubmitted: boolean;
  */
    constructor(public service : MemberService, private db : AngularFireDatabase,
      private storage : AngularFireStorage, private notificationService : NotificationService,
      public dialogRef : MatDialogRef<AddMemberComponent>) { }
      
    ngOnInit() { }  

    /*
    showPreview(event: any) {
      if (event.target.files && event.target.files[0]) {
        var reader = new FileReader();
        reader.onload = (e : any) => this.imgSrc = e.target.result;
        reader.readAsDataURL(event.target.files[0]); //read file as data url
        this.selectedImage = event.target.files[0];
      }
      else {
        this.imgSrc = "https://cdn3.iconfinder.com/data/icons/user-actions-9/128/user_action_set_2_final-14-512.png";
        this.selectedImage = null;
      }
    }
  
  */
 onClear() {
  this.service.form.reset();
  this.service.initializeFormGroup();
  this.dialogRef.close();
}
  grades = [
    {id : 1 , value : Grade.Directeur},
    {id : 2 , value : Grade.Adjoint},
    {id : 3 , value : Grade.ChefDept},
    {id : 4 , value : Grade.PES},
    {id : 5 , value : Grade.PA},
    {id : 6 , value : Grade.PH},
  ]

  departments = [
    {id : 1 , value : Department.GI},
    {id : 2 , value : Department.GE},
    {id : 3 , value : Department.TCC},
    {id : 4 , value : Department.TM},
  ]
  onSubmit () {
  /*  this.isSubmitted = true;
      if (this.service.form.valid) {
        var filePath = `Member/${this.selectedImage.name}_${new Date().getTime()}`;
        const fileRef = this.storage.ref(filePath);
        this.storage.upload(filePath, this.selectedImage).snapshotChanges().pipe(
          finalize(() => {
            fileRef.getDownloadURL().subscribe((url) => {
              formValue['imageUrl'] = url;
              this.resetForm();
            })
          })
        ).subscribe();
      }
      */
    if (this.service.form.valid) {
      if(! this.service.form.get('$key').value) 
        this.service.InsertMember(this.service.form.value);
        else 
        this.service.updateMember(this.service.form.value);
        this.service.form.reset();
        this.service.initializeFormGroup();
        this.notificationService.success("Enregister avec succès !");
        this.onClear();
    }
  }

}

