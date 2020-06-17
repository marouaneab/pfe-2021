import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatConfirmDialogComponent } from '../mat-confirm-dialog/mat-confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog : MatDialog) { }

  ConfirmDialog (msg) {
   return this.dialog.open(MatConfirmDialogComponent, {
      width : '450px',
      disableClose : true,
      position : {top : "10px"},
      panelClass : 'confirm-dialog-container',
      data : {
        message : msg,
      }
    })
  }

}
