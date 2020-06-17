import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss']
})
export class MeetingsComponent implements OnInit {

  meetings: Array<any> = [];
  description = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi reiciendis debitis, tenetur asperiores deserunt, voluptates neque obcaecati modi perferendis temporibus, magni nisi dolorum omnis magnam tempore similique quisquam repellat deleniti!';
  place = 'MEKNES';
  location = 'ESTM';
  Start_time =new Date();
  End_Time =  new Date().setHours(this.Start_time.getHours() + 1);

  constructor() {
    this.meetings = [
      {
          place: this.place,
          description: this.description,
          status : 'In review',
          location: this.location,
          Start_time : this.Start_time,
          End_Time : this.End_Time 
      },
    
      {
  
          place: this.place,
          description: this.description,
          status : 'Published',
          location: this.location,
          Start_time : this.Start_time,
          End_Time : this.End_Time
      },
      {
          place: this.place,
          description: this.description,
          status: 'upcoming',
          location: this.location,
          Start_time : this.Start_time,
          End_Time : this.End_Time
       },
       {
         
        place: this.place,
        description: this.description,
        status: 'Cancelled',
        location: this.location,
        Start_time : this.Start_time,
        End_Time : this.End_Time
       }
  ];
   }

  ngOnInit(): void {
  }

}
