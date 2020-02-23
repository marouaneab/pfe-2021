import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MAT_MOMENT_DATE_FORMATS,MomentDateAdapter,MAT_MOMENT_DATE_ADAPTER_OPTIONS,} 
            from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';


interface Filter {
  value : string;
  vValue : string;
}

interface Fgroup {
  name : string;
  type : Filter [];
}
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
   {value : 'in review',vValue : 'Publié'},
   {value : 'cancelled' , vValue : 'Annulés'},
   {value : 'overdue', vValue : 'En retard'}
 ]

 }
]

  constructor(private _adapter: DateAdapter<any>) { }

  ngOnInit(): void {
  }
  french() {
    this._adapter.setLocale('fr');
  }
}
