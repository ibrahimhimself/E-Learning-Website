import { HttpClient } from '@angular/common/http';
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
  constructor
  (
    private fb : FormBuilder ,
    private http:HttpClient ,
    private router:Router ,
    private AuthService:AuthService,
    private toster:ToastrService
  )
  {

    
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
    // this.getUsers();
    this.userFormGroup = this.fb.group({
      first_name:['',[Validators.required , Validators.minLength(3)]],
      last_name:['',[Validators.required , Validators.minLength(3)]],
      email:['',[Validators.required , Validators.email]],
      password:['',[Validators.required , Validators.minLength(8)]],
      username:['',[Validators.required , Validators.minLength(5)]],
      address:['',[Validators.required]],
      phone:['',[Validators.required , Validators.minLength(11) , Validators.maxLength(11)]],
    })
  }

  submit(){
    this.http.post(`${environment.APIBaseURL}/student/create` , this.userFormGroup.getRawValue())
    .subscribe(res => {
      // this.router.navigate(['Login']); 
      console.log(res);
      
    })
  }

  // getUsers(){
  //   this.AuthService.getUsers().subscribe((res:any) => {
  //     this.students = res;
  //   })
  // }

  // submit(){
  //   let index = this.students.findIndex(item => item.email == this.userFormGroup.value.email);
  //   if(index !== -1){
  //     this.toster.error("This Email is Already Taken" , "" , {
  //       disableTimeOut:false,
  //       titleClass:"toastr_title",
  //       messageClass:"toastr_message",
  //       timeOut:5000,
  //       closeButton:true
  //     });
  //   }
  //   else
  //   {
  //     this.AuthService.createUserStudent(this.userFormGroup.getRawValue()).subscribe(res => {
  //     this.toster.success("Already Registed" , "" , {
  //       disableTimeOut:false,
  //       titleClass:"toastr_title",
  //       messageClass:"toastr_message",
  //       timeOut:5000,
  //       closeButton:true
  //     });
  //     this.router.navigate(['/Login']);
  //   })
  //   }
  // }
  // submit(){
  //     this.AuthService.createUserStudent(this.userFormGroup.getRawValue()).subscribe(res => {
  //     this.router.navigate(['/Login']);
  //   })
  // }
}
