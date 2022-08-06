import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { environment } from 'src/environments/environment';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userFormGroup!:FormGroup;
  students:any[] = [];
  private httpOptions = {};

  constructor
  (
    private fb : FormBuilder ,
    private http:HttpClient ,
    private router:Router ,
    private AuthService:AuthService,
    private toster:ToastrService
  )
  {
    this.httpOptions={
      headers:new HttpHeaders({
        'Content-Type': 'application/json'

      })
    };
  }

  get first_name(){
    return this.userFormGroup.get('first_name');
  }
  get last_name(){
    return this.userFormGroup.get('last_name');
  }
  get email(){
    return this.userFormGroup.get('email');
  }
  get password(){
    return this.userFormGroup.get('password');
  }
  get phone(){
    return this.userFormGroup.get('phone');
  }
  get username(){
    return this.userFormGroup.get('username');
  }
  get address(){
    return this.userFormGroup.get('address');
  }

  ngOnInit(): void {
    this.userFormGroup = this.fb.group({
      first_name:['',[Validators.required , Validators.minLength(3)]],
      last_name:['',[Validators.required , Validators.minLength(3)]],
      email:['',[Validators.required , Validators.email]],
      password:['',[Validators.required , Validators.minLength(5)]],
      username:['',[Validators.required , Validators.minLength(5)]],
      address:['',[Validators.required]],
      phone:['',[Validators.required , Validators.minLength(11) , Validators.maxLength(11)]],
    })
  }

  submit(){
    this.AuthService.createUserStudent(this.userFormGroup.getRawValue())
    .subscribe((res:any) => {
      this.router.navigate(['Login']);
      localStorage.setItem('token' , res.token);
      console.log(res);
    })
  }
}
