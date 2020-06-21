import {Component, OnInit} from '@angular/core';
import {Classification, Member} from '../interfaces/Member';
import {MembersService} from "../services/members.service";
import {MatDialog} from "@angular/material/dialog";
import {EditMemberModalComponent, SnackBarLoadingComponent} from "./member/member.component";
import {MatSnackBar} from "@angular/material/snack-bar";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-users',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  arr: Member[] = [];
  searchWord = '';
  Loi = Classification.Loi;
  Elu = Classification.Elu;
  Design = Classification.Design;

  constructor(public memberSrv: MembersService, private modal: MatDialog, private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }

  add(clsf?: Classification) {
    this.modal.open(EditMemberModalComponent, {
      closeOnNavigation: false,
      hasBackdrop: true,
      maxWidth: '90vw',
      minWidth: '60vw',
      data: {
        clsf
      }
    }).afterClosed().subscribe(result => {
      if (result !== null) {
        const _message = 'En train de modifier les informations de ' + result.nom + ' ' + result.prenom;

        const message: BehaviorSubject<string> = new BehaviorSubject<string>(_message);

        const snackBarRef = this.snackBar.openFromComponent(SnackBarLoadingComponent, {data: {message}});

        result.id = undefined;
        this.memberSrv.add(result).then(() => {
          message.next('Membre Ajouté');
          snackBarRef.afterDismissed().subscribe(() => message.unsubscribe());
          snackBarRef._dismissAfter(3000);
        }, () => {
          message.next('Membre Non Ajouté ! Réessayer plus tard');
          snackBarRef.afterDismissed().subscribe(() => message.unsubscribe());
          snackBarRef._dismissAfter(3000);
        });
      }
    });
  }
}
