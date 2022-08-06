import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private httpOptions = {};

  constructor(private http:HttpClient , private router:Router) {
    this.httpOptions={
      headers:new HttpHeaders({
        'Content-Type': 'application/json'

      })
    };
  }

  user = new Subject();

  createUserStudent(model:any){
    return this.http.post<any>(`${environment.APIBaseURL}/student/create` , model , {withCredentials:true});
  }

  getUsers(){
    return this.http.get<any>(`${environment.APIBaseURL}/students/2`);
  }
  
  login(model:any){
    return this.http.post<any>(`${environment.APIBaseURL}/student/login` , model , {withCredentials:true});
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  logoutUser(){
    return localStorage.removeItem('token'),
    this.router.navigate(["/Login"]);
  }
  // getUserLoginData(){
  //   return this.http.get(`${environment.AuthApiURL}/login/1`);
  // }
}
