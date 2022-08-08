import { HttpClient, } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userFormGroup!:FormGroup;
  students:any[] = [];

  constructor
  (
    private fb : FormBuilder ,
    private http:HttpClient ,
    private router:Router ,
    private AuthService:AuthService,
    private toster:ToastrService,
  ){}

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
      localStorage.setItem('username' , res.data.username);
      localStorage.setItem('email' , res.data.email);
      localStorage.setItem('address' , res.data.address);
      localStorage.setItem('phone' , res.data.phone);
      localStorage.setItem('role' , res.data.role);
      localStorage.setItem('first_name' , res.data.first_name);
      localStorage.setItem('last_name' , res.data.last_name);
      console.log(res.data);
    })
  }  
}
