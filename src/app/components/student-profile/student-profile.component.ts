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

  constructor() { }

  ngOnInit(): void {
    
    this.username = localStorage.getItem('username');
    this.email = localStorage.getItem('email');
    this.address = localStorage.getItem('address');
    this.phone = localStorage.getItem('phone');
    this.role = localStorage.getItem('role');
  }
}
