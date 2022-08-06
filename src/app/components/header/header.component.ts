import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Emitters } from 'src/app/emitters/emitters';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  // authenticated = false;
  user:any = ""
  constructor(private http:HttpClient , public authService:AuthService) { }
  
  ngOnInit(): void {

    this.authService.getUsers().subscribe((res:any) => {

      this.user = res.data;
      // console.log(localStorage.getItem('token'));
      // console.log(res.data.id);
    })
  }

}
