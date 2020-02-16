import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {
  selectedDate = new Date();

  constructor() { }

  ngOnInit(): void {
  }

  onSelect($event: any) {
    this.selectedDate = $event;
  }

  addEvent() {
    // go to add event page with the < selectedDate >
  }

}
