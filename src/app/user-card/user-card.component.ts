import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface NewUsers {

  nom: string;
  Uid: number;
  photo?: string;
  prenom: string;
  email: string;
  address: string;
  role: string;
  date : Date;
  department: string;
}

const USER_DATA: NewUsers[] = [];

@Component({
  selector: 'users-table-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})

export class UserCardComponent implements OnInit {

  displayedColumns: string[] = ['Uid', 'photo', 'nom', 'prenom', 'email', 'address', 'role','date', 'department'];
  dataSource = new MatTableDataSource<NewUsers>(USER_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}
