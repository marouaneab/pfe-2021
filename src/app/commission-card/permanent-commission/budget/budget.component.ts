import {Component, OnInit, ViewChild} from '@angular/core';
import { MemberService } from 'src/app/services/member.service';
import { MatTableModule, MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { AddMemberComponent } from '../../cms-members/add-member/add-member.component';
import {MatDialog , MatDialogConfig } from '@angular/material/dialog';
import { NotificationService } from 'src/app/services/notification.service';
import { DialogService } from 'src/app/services/dialog.service';
import { CMSMembersComponent } from '../../cms-members/cms-members.component';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.scss']
})
export class BudgetComponent extends CMSMembersComponent implements OnInit {

   constructor(public service : MemberService ,public dialog : MatDialog,
    public notificationService : NotificationService,
    public dialogService : DialogService) {
      super(service,dialog,notificationService,dialogService);
    }

   listData : MatTableDataSource<any>;
  displayedColumns : string [] = ["nom","prenom","mail","adresse","department","grade","actions"];

  @ViewChild(MatSort) sort : MatSort;
  @ViewChild(MatPaginator) paginator : MatPaginator;
  searchKey : string;
  
  ngOnInit() {
    this.service.getMembers('commission-suivi-de-budget').subscribe(
      list => {
        let array = list.map(item => {
    
          return {
            $key : item.key,
            ...item.payload.val(),
          };
        });
        this.listData = new MatTableDataSource(array);
        this.listData.sort= this.sort;
        this.listData.paginator= this.paginator;
      });
  }

  onSearchClear () {
    super.onSearchClear();
  }

  applyFilter () {
    super.applyFilter();
  }

  addMember() {
    super.addMember();
  }

  onEdit(row) {
    super.onEdit(row);
  }

  onDelete ($key) {
      super.onDelete($key);
  }

}


