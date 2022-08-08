import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExamAuthService } from '../../services/examAuth.service';

@Component({
  selector: 'app-register',
  templateUrl: './exam-register.component.html',
  styleUrls: ['./exam-register.component.scss']
})
export class ExamRegisterComponent implements OnInit {
  userForm!:FormGroup;
  students:any[]= []
  constructor(private fb:FormBuilder ,private service:ExamAuthService  , private router:Router , private toaster:ToastrService) { }
  ngOnInit(): void {
    this.createForm()
    this.getStudents()
  }

  createForm() {
    this.userForm = this.fb.group({
      username:['' , [Validators.required]],
      email:['' , [Validators.required , Validators.email]],
      password:['' , [Validators.required]],
      confirmPassword:['' , [Validators.required]],
    })
  }


  getStudents() {
    this.service.getUsers('students').subscribe((res:any) => {
      this.students = res
    })
  }
  submit() {
    const model = {
      username:this.userForm.value.username,
      email:this.userForm.value.email,
      password:this.userForm.value.password,
    }

    let index = this.students.findIndex(item => item.email == this.userForm.value.email )
    if(index !== -1) {
      this.toaster.error("Email  already exists" , "" , {
        disableTimeOut: false,
        titleClass: "toastr_title",
        messageClass: "toastr_message",
        timeOut:5000,
        closeButton: true,
      })
    }else {
      this.service.createUser(model).subscribe((res:any) => {
        this.toaster.success("successfully registered" , "" , {
          disableTimeOut: false,
          titleClass: "toastr_title",
          messageClass: "toastr_message",
          timeOut:5000,
          closeButton: true,
        })
        const model = {
          username:res.username,
          role:'students',
          userId:res.id
        }
        this.service.login(model).subscribe(res => {
          this.service.user.next(res)
        })
        this.router.navigate(['/subjects'])
      })
    }

  }
}
