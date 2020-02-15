import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss']
})
export class CollapseComponent implements OnInit {
  collapsed = true;

  constructor() {
  }

  ngOnInit() {
  }

  toggleCollapse() {
    this.collapsed = !this.collapsed;
  }
}
