import {Component, OnInit} from '@angular/core';

export interface Message {
  from: string;
  content: string;
  read: boolean;
}

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.scss']
})
export class MailBoxComponent implements OnInit {
  messages: Message[];
  selectedMsg: Message;

  constructor() {
    this.messages = [
      {
        from: 'Billal',
        content: 'Layn3l tbon mo',
        read: false
      },
      {
        from: 'Rabie',
        content: 'Ntarach tabon ymah',
        read: true
      },
      {
        from: 'Soufian',
        content: 'I\'m from Morocco',
        read: true
      }
    ];
  }

  ngOnInit(): void {
  }

  setSelectedMsg(msg: Message) {
    this.selectedMsg = msg;
    this.selectedMsg.read = true;
  }
}
