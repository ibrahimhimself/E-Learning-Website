import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { AuthInterceptor } from 'src/app/interceptors/auth.interceptor';
import { AuthService } from 'src/app/service/auth.service';
import { ToastrService } from 'ngx-toastr';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userFormGroup!:FormGroup;
  students:any[] = [];
  // userType:string = "students";
  private httpOptions = {};

  constructor
  (
    private fb : FormBuilder ,
    private http:HttpClient ,
    private router:Router ,
    private AuthService:AuthService,
    private toster:ToastrService,
  ){
    // this.httpOptions={
    //   headers:new HttpHeaders({
    //     'Content-Type': 'application/json'
    //   })
    // };
  }

  get email(){
    return this.userFormGroup.get('email')
  }
  get password(){
    return this.userFormGroup.get('password')
  }
  get userTyper(){
    return this.userFormGroup.get('userTyper')
  }

  ngOnInit(): void {
    this.userFormGroup = this.fb.group({
      
      email:['', [Validators.required , Validators.email]],
      password:['', [Validators.required , Validators.minLength(5)]]
    })
  }

  submit(){
    this.AuthService.login(this.userFormGroup.getRawValue())
    .subscribe((res:any) => {
      this.router.navigate(["/"]);
      localStorage.setItem('token' , res.token);
      console.log(res);
    })
  }  
}
