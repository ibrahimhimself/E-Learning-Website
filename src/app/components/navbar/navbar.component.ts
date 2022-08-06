import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  username:any = ""
  constructor(public authService:AuthService) { }
  
  ngOnInit(): void {

    this.username = localStorage.getItem('username');
  }

}
