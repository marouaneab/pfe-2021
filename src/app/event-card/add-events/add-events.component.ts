import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-add-events',
  templateUrl: './add-events.component.html',
  styleUrls: ['./add-events.component.scss']
})



export class AddEventsComponent implements OnInit {


  
  constructor() { }

  ngOnInit(): void {
  }

  get minValue() {
    const val=new Date();
    val.setHours(12);
    val.setMinutes(10);
    return val;
  }
  get maxValue() {
    
    const val=new Date();
    val.setHours(23);
    val.setMinutes(30);
    return val;
  }

}
