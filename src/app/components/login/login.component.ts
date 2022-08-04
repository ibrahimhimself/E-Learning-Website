import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthInterceptor } from 'src/app/interceptors/auth.interceptor';
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

  constructor
  (
    private fb : FormBuilder ,
    private http:HttpClient ,
    private router:Router ,
    private AuthService:AuthService,
    private toster:ToastrService
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
    // this.getUsers();
    this.userFormGroup = this.fb.group({
      // userTyper:[this.userType],
      email:['', [Validators.required , Validators.email]],
      password:['', [Validators.required , Validators.minLength(8)]]
    })
  }

  submit(){
    this.http.post(`${environment.APIBaseURL}/student/login` , this.userFormGroup.getRawValue() , {withCredentials: true})
    .subscribe(() => {
      // AuthInterceptor.accessToken = res.token;
      this.router.navigate(['/']); 
    })
  }

  // getRole(event:any){
  //   this.userType = event.value,
  //   this.getUsers();
  // }

  // getUsers(){
  //   this.AuthService.getUsers().subscribe((res:any) =>{
  //     this.students = res;
  //   })
  // }

  // submit(){
  //   let index = this.students.findIndex(item => item.email == this.userFormGroup.value.email && item.password == this.userFormGroup.value.password);
  //   if(index == -1){
  //     this.toster.error("Check Your Email And Password" , "" , {
  //       disableTimeOut:false,
  //       titleClass:"toastr_title",
  //       messageClass:"toastr_message",
  //       timeOut:5000,
  //       closeButton:true
  //     });
  //   }
  //   else
  //   {
  //     const model = {
  //       firstName:this.students[index].firstName,
  //       lastName:this.students[index].lastName,
  //       email:this.students[index].email,
  //       phone:this.students[index].phone,
  //       password:this.students[index].password,
  //       username:this.students[index].username,
  //       address:this.students[index].address
  //     }
  //     this.AuthService.login(model).subscribe(res => {
  //     this.AuthService.user.next(res);
  //     this.toster.success("Hello " + model.firstName + " " + model.lastName, "" , {
  //       disableTimeOut:false,
  //       titleClass:"toastr_title",
  //       messageClass:"toastr_message",
  //       timeOut:5000,
  //       closeButton:true
  //     });
  //     this.router.navigate(['/']);
  //   })
  //   }
  // }
}
