import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient , private router:Router) {}

  user = new Subject();

  createUserStudent(model:any){
    return this.http.post<any>(`${environment.APIBaseURL}/student/create` , model , {withCredentials:true});
  }

  becomeInstructor(model:any){
    return this.http.post<any>(`${environment.APIBaseURL}/instructors` , model , {withCredentials:true});
  }

  contact(model:any){
    return this.http.post<any>(`${environment.APIBaseURL}/contact-form` , model , {withCredentials:true});
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
           localStorage.removeItem('username'),
           localStorage.removeItem('email'),
           localStorage.removeItem('role'),
           localStorage.removeItem('phone'),
           localStorage.removeItem('address'),
    this.router.navigate(["/Login"]);
  }
}
