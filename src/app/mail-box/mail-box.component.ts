import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.scss']
})
export class MailBoxComponent implements OnInit {
  messages: { from, content }[];
  selectedMsg: { from, content };

  constructor() {
    this.messages = [
      {
        from: 'Billal',
        content: 'Layn3l tbon mo'
      },
      {
        from: 'Rabie',
        content: 'Ntarach tabon ymah'
      },
      {
        from: 'Soufian',
        content: 'I\'m from Morocco'
      }
    ];
  }

  ngOnInit(): void {
  }
}
