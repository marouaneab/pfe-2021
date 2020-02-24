import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'event-card',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {
  selectedDate = new Date();

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  onSelect($event: any) {
    this.selectedDate = $event;
  }

  addEvent() {
      this.router.navigate(["/dashboard/events"]);
  }

}
