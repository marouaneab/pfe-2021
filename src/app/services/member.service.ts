import { Injectable } from '@angular/core';
import { FormGroup , FormControl ,  Validators} from '@angular/forms';
import {AngularFireDatabase ,AngularFireList} from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class MemberService {

  constructor(private db : AngularFireDatabase) { }

  MemberList : AngularFireList<any>;
 
  form : FormGroup = new FormGroup ({
    $key : new FormControl(null), 
  //  imageUrl: new FormControl(''),
    nom : new FormControl('',Validators.required),
    prenom : new FormControl ('',Validators.required),
    mail : new FormControl('',[Validators.email,Validators.required]),
    adresse : new FormControl('',[Validators.minLength(3),Validators.required]),
    grade : new FormControl(0,Validators.required),
    department : new FormControl(0),
  });

  initializeFormGroup() {
    this.form.setValue({
      $key: null,
      //imageUrl: '',
      nom: '',
      prenom: '',
      mail: '',
      adresse: '',
      department: 0,
      grade: 0,
    });
  }
  getMembers (cms : string) {
    this.MemberList = this.db.list('Members/'+cms);
    return this.MemberList.snapshotChanges();
  }

  InsertMember (member) {
    this.MemberList.push({
    //  imageUrl : member.image,
      nom : member.nom,
      prenom : member.prenom,
      mail : member.mail,
      adresse : member.adresse,
      grade : member.grade,
      department : member.department
    });
  }

  updateMember (member) {
    this.MemberList.update(member.$key, {
    //  imageUrl : member.image,
      nom : member.nom,
      prenom : member.prenom,
      mail : member.mail,
      adresse : member.adresse,
      grade : member.grade,
      department : member.department
    });
  }

  deleteMember ($key : string ) {
    this.MemberList.remove($key);
  }

  fillForm (member) {
    this.form.setValue(member)
  }

}
