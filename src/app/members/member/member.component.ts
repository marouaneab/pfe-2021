import {Component, Inject, Input, OnInit} from '@angular/core';
import {Classification, Department, Grade, Member} from '../../interfaces/Member';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MembersService} from "../../services/members.service";
import {MAT_SNACK_BAR_DATA, MatSnackBar} from "@angular/material/snack-bar";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {
  @Input() member: Member;
  private dialogRef: MatDialogRef<any>;

  constructor(private dialog: MatDialog, private memSrv: MembersService, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  edit() {
    this.dialogRef = this.dialog.open(EditMemberModalComponent, {
      closeOnNavigation: false,
      hasBackdrop: true,
      maxWidth: '90vw',
      minWidth: '60vw',
      data: {
        member: this.member
      }
    });
    this.dialogRef.afterClosed().subscribe(result => {
      if (result !== null) {
        const _message = 'En train de modifier les informations de ' + result.nom + ' ' + result.prenom;

        const message: BehaviorSubject<string> = new BehaviorSubject<string>(_message);

        const snackBarRef = this.snackBar.openFromComponent(SnackBarLoadingComponent, {data: {message}});

        result.id = this.member.id;

        this.memSrv.update(result).then(() => {
          message.next('Informations Enregistrées');
          snackBarRef.afterDismissed().subscribe(() => message.unsubscribe());
          snackBarRef._dismissAfter(3000);
        }, () => {
          message.next('Informations Non Enregistrées ! Réessayer plus tard');
          snackBarRef.afterDismissed().subscribe(() => message.unsubscribe());
          snackBarRef._dismissAfter(3000);
        });
      }
    });
  }
}
@Component({
  selector: 'snack-bar-loading',
  template: `<div>{{ data.message | async }}</div>`
})
export class SnackBarLoadingComponent {
  constructor(@Inject(MAT_SNACK_BAR_DATA) public data: {message: BehaviorSubject<string>}) {
  }
}

@Component({
  selector: 'edit-member',
  templateUrl: 'edit-member.component.html'
})
export class EditMemberModalComponent implements OnInit {
  member: Member;
  clsf: Classification;
  grades = Object.keys(Grade);
  gg = Grade;
  classes = Object.keys(Classification);
  cc = Classification;
  depts = Object.keys(Department);
  dd = Department;

  form: FormGroup = new FormGroup({});
  f = {
    f_name: new FormControl('', Validators.required),
    l_name: new FormControl('', Validators.required),
    mail: new FormControl('', Validators.required),
    grade: new FormControl('', Validators.required),
    address: new FormControl(''),
    clsf: new FormControl(''),
    dept: new FormControl('')
  };
  image: any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {member?: Member, clsf?: Classification},
    public memSrv: MembersService
  ) {
    this.member = data?.member;
    this.clsf = data?.clsf;
  }

  ngOnInit() {
    this.form.addControl('prenom', this.f.f_name);
    this.form.addControl('nom', this.f.l_name);
    this.form.addControl('mail', this.f.mail);
    this.form.addControl('adresse', this.f.address);
    this.form.addControl('grade', this.f.grade);
    this.form.addControl('classification', this.f.clsf);
    this.form.addControl('department', this.f.dept);
  }
}
