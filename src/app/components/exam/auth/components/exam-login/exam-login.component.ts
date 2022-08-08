import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExamAuthService } from '../../services/examAuth.service';

@Component({
  selector: 'app-login',
  templateUrl: './exam-login.component.html',
  styleUrls: ['./exam-login.component.scss']
})
export class ExamLoginComponent implements OnInit {

  loginForm!:FormGroup;
  users:any[]= [];
  type:string = "students"
  constructor(private fb:FormBuilder ,private service:ExamAuthService  , private router:Router , private toaster:ToastrService) { }

  ngOnInit(): void {
    this.getUsers();
    this.createForm()
  }

  createForm() {
    this.loginForm = this.fb.group({
      type:[this.type],
      email:['' , [Validators.required , Validators.email]],
      password:['' , [Validators.required]],
    })
  }

  getRole(event:any) {
    this.type = event.value
    this.getUsers()
  }
  getUsers() {
    this.service.getUsers(this.type).subscribe((res:any) => {
      this.users = res
    })
  }

  submit() {


    let index = this.users.findIndex(item => item.email == this.loginForm.value.email && item.password == this.loginForm.value.password  )
    if(index == -1) {
      this.toaster.error("Email or password Incorrect" , "" , {
        disableTimeOut: false,
        titleClass: "toastr_title",
        messageClass: "toastr_message",
        timeOut:5000,
        closeButton: true,
      })
    }else {
      const model = {
        username:this.users[index].username,
        role:this.type,
        userId:this.users[index].id
      }
      this.service.login(model).subscribe(res => {
        this.service.user.next(res)
        this.toaster.success("successfully registered" , "" , {
          disableTimeOut: false,
          titleClass: "toastr_title",
          messageClass: "toastr_message",
          timeOut:5000,
          closeButton: true,
        })
        this.router.navigate(['/subjects'])
      })
    }

  }

}
