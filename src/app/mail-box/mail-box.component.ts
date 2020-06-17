import {Component, OnInit} from '@angular/core';

export interface Message {
  from: string;
  content: string;
  read: boolean;
  about?: string;
}

@Component({
  selector: 'app-mail-box',
  templateUrl: './mail-box.component.html',
  styleUrls: ['./mail-box.component.scss']
})
export class MailBoxComponent implements OnInit {
  messages: Message[];
  selectedMsg: Message;
  private lorem = `
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
  et dolore magna aliqua. Imperdiet massa tincidunt nunc pulvinar sapien. Suspendisse in est ante in nibh mauris cursus.<br>
  `;

  constructor() {
    this.messages = [
      {
        from: 'Billal',
        content: this.lorem.repeat(5),
        read: false,
        about: 'Lorem'
      },
      {
        from: 'Rabie',
        content: this.lorem.repeat(15),
        read: true
      },
      {
        from: 'Soufian',
        content: this.lorem.repeat(10),
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
