import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  username:any = "" ;
  email:any = "" ;
  address:any = "" ;
  phone:any = "" ;
  role:any = "" ;
  first_name:any = "" ;
  last_name:any = "" ;

  constructor() { }

  ngOnInit(): void {
    
    this.username = localStorage.getItem('username');
    this.email = localStorage.getItem('email');
    this.address = localStorage.getItem('address');
    this.phone = localStorage.getItem('phone');
    this.role = localStorage.getItem('role');
    this.first_name = localStorage.getItem('first_name');
    this.last_name = localStorage.getItem('last_name');
  }
}
