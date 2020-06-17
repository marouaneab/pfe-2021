import {Component, OnInit, ViewChild} from '@angular/core';
import { MemberService } from 'src/app/services/member.service';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { AddMemberComponent } from '../cms-members/add-member/add-member.component';
import {MatDialog , MatDialogConfig } from '@angular/material/dialog';
import { NotificationService } from 'src/app/services/notification.service';
import { DialogService } from 'src/app/services/dialog.service';


@Component({
  selector: 'cms-members',
  templateUrl: './cms-members.component.html',
  styleUrls: ['./cms-members.component.scss']
})

export class CMSMembersComponent implements OnInit {

  constructor(public service : MemberService ,public dialog : MatDialog,
    public notificationService : NotificationService,
    public dialogService : DialogService) {} 

   listData : MatTableDataSource<any>;
  displayedColumns : string [] = ["nom","prenom","mail","adresse","department","grade","actions"];

  @ViewChild(MatSort) sort : MatSort;
  @ViewChild(MatPaginator) paginator : MatPaginator;
  searchKey : string;

  ngOnInit() { }

  onSearchClear () {
    this.searchKey ='';
    this.applyFilter();
  }

  applyFilter () {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }

  addMember() {
      const dialogConfig=new MatDialogConfig();
      dialogConfig.disableClose = true;
      dialogConfig.autoFocus = true;
      dialogConfig.width = "80%";
      this.dialog.open(AddMemberComponent,dialogConfig);
  }

  onEdit(row) {
    this.service.fillForm(row);
    const dialogConfig=new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "80%";
    this.dialog.open(AddMemberComponent,dialogConfig);
  }

  onDelete ($key) {
    this.dialogService.ConfirmDialog('Voulez vous vraiment supprimer ce membre ?')
    .afterClosed().subscribe(res => {
      if (res) {
      this.service.deleteMember($key);
      this.notificationService.warn('Supprimé avec succès !');
      } 
    });

  }
  
}
