import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emitters } from 'src/app/emitters/emitters';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  user:any = "" ;

  constructor(private http:HttpClient, private authService:AuthService) { }

  ngOnInit(): void {
    this.authService.getUsers().subscribe((res:any) => {

      this.user = res.data;

      console.log(res.data);
      
    })
  }
}
