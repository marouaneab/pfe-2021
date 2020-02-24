import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    constructor(private router : Router) {}
    hide = true;
username: string;
password: string;
  ngOnInit() {
  }
  login() : void {
     

    if(this.username == 'admin' && this.password == 'admin'){
     this.router.navigate(["/dashboard"]);
    }
    else if(this.username == '' || this.password == '') {
      alert("please fill the required fields")
    }
    else {
      alert ("invalid user");
    }
  }
  }


