import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss'],
  animations: [
    trigger('expand', [
      transition(':enter', [
        style({height: 0, opacity: 0}),
        animate('300ms', style({height: '*', opacity: 1}))
      ]),
      transition(':leave', [
        animate('300ms', style({height: 0, opacity: 0}))
      ])
    ])
  ]
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
