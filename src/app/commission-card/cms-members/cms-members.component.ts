import { Component, OnInit,ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';

export interface Members {
  id: number;
  photo?: string;
  nom: string;
  prenom: string;
  email: string;
  adresse: string;
  role: string;
  grade : string;
  department: string;
}

const MEMBER_DATA : Members[] = [
  {
    id: 1,
    photo: '',
    nom: 'chi wahd',
    prenom: 'lhaj',
    email: 'chiWahd.lhaj@gmail.com',
    adresse: 'Taiwan',
    role: 'Etudiant',
    grade : 'Supérior',
    department : 'xxxx'
  },
  {
    id: 2,
    photo: '',
    nom: 'Mrani',
    prenom: 'Nabil',
    email: 'Nmrani@gmail.com',
    adresse: 'Hmria',
    role: 'Professeur',
    grade : 'Supérior',
    department : 'Informatique'
  },
  {
    id: 3,
    photo: '',
    nom: 'Bennasr',
    prenom: 'Mohammed',
    email: 'mohammed.bennasr@gmail.com',
    adresse: 'Rabat',
    role: 'Directeur',
    grade : 'Supérior',
    department : 'Informatique'
  }
];

@Component({
  selector: 'cms-members',
  templateUrl: './cms-members.component.html',
  styleUrls: ['./cms-members.component.scss']
})
export class CMSMembersComponent implements OnInit {

  dataSource = new MatTableDataSource<Members>(MEMBER_DATA);
  
  displayedColumns: string[] = ['id', 'photo', 'nom', 'prenom','email','adresse','role','grade','department','edit'];
  
  members : Members[];
  

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private router :Router) { 
    this.dataSource = new MatTableDataSource<Members>(MEMBER_DATA);
  }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  deleteMember (member : Members ){
     
  }

  EditMember (member : Members) {
    localStorage.removeItem('EditMemberId');
    localStorage.setItem('EditMemberId',member.id.toString());
    this.router.navigate(['edit-member']);
  }

  addMember() {
      this.router.navigate(['add-member']);
  }
}
