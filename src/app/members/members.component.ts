import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.scss']
})
export class MembersComponent implements OnInit {
  arr = new Array(10);

  constructor() { }

  ngOnInit(): void {
  }

}
