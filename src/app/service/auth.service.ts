import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) {}

  user = new Subject();

  createUserStudent(model:any){
    return this.http.post(`${environment.AuthApiURL}/students` , model);
  }

  getUsers(){
    return this.http.get(`${environment.AuthApiURL}/students`);
  }
  
  login(model:any){
    return this.http.put(`${environment.AuthApiURL}/login/1` , model);
  }

  getUserLoginData(){
    return this.http.get(`${environment.AuthApiURL}/login/1`);
  }
}
