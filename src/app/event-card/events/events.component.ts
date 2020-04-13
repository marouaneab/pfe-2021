import { Component, OnInit, ViewChild } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MAT_MOMENT_DATE_FORMATS,MomentDateAdapter,MAT_MOMENT_DATE_ADAPTER_OPTIONS} 
            from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatDialog} from '@angular/material/dialog';
import { AddEventsComponent } from '../add-events/add-events.component';

interface Filter {
  value : string;
  vValue : string;
}

interface Fgroup {
  name : string;
  type : Filter [];
}

export interface Meeting {
  id: number,
  titre: string,
  location: string,
  objet: string,
  status : string,
  start: Date,
  end: Date,
  resume ?: string
}

const MEET_DATA: Meeting[] = [
  {
    id: 1,
    titre: "Assemblée générale",
    location: "Meknes",
    objet: "Etudier les problèmes locaux, régionaux et nationaux",
    status: "Publié",
    start: new Date(2020, 1, 13, 18, 0, 0),
    end: new Date(2020, 1, 13,19,0,0),
  }]

  @Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss'],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ],
})

export class EventsComponent implements OnInit {

  FilterControl =new FormControl('');
  FGroups : Fgroup [] = [ {
    name : 'Date',
    type : [
      {value : 'today' ,vValue : `Aujourd'hui`},
      {value : 'week',vValue : 'Cette semaine'},
      {value : 'month' , vValue : 'Cet moins'}
    ]
  },
 {   name : 'Status',
 type : [
   {value : 'upcoming' ,vValue : 'Prochaine'},
   {value : 'in review',vValue : 'En révision'},
   {value : 'published',vValue : 'Publié'},
   {value : 'cancelled' , vValue : 'Annulés'},
   {value : 'overdue', vValue : 'En retard'}
 ]

 }
]

  constructor(private _adapter: DateAdapter<any>,public dialog : MatDialog) { }
  
  displayedColumns: string[] = ['id', 'titre', 'location', 'objet', 'status', 'start', 'end','edit'];
  dataSource = new MatTableDataSource<Meeting>(MEET_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  french() {
     this._adapter.setLocale('fr');
   }

  addEvent() {
    this.dialog.open(AddEventsComponent);
}

}
