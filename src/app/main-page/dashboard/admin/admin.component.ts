import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  selectedDate = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect($event: any) {
    this.selectedDate = $event;
  }
}
