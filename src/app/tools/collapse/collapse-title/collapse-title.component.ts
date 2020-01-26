import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'collapse-title',
  templateUrl: './collapse-title.component.html',
  styleUrls: ['./collapse-title.component.scss']
})
export class CollapseTitleComponent implements OnInit {
  @Input() link: string;

  get hasLink() {
    return this.link !== '';
  }

  constructor() { }

  ngOnInit() {
  }

}
