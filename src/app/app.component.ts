import { Component, OnInit } from '@angular/core';
import { AuthService } from './service/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Final-Project-Angular';
  constructor(private AuthService:AuthService){}

  ngOnInit(): void {

    this.getUserData();
  }

  getUserData(){
    // this.AuthService.getUserLoginData().subscribe(res => {
    //   this.AuthService.user.next(res);
    // })
  }
}
