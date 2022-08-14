import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  contactFormGroup!:FormGroup;
  Message:any = '';
  constructor(
    private fb : FormBuilder,
    private router : Router,
    private authService : AuthService
  ) { }

  ngOnInit(): void {
    this.contactFormGroup = this.fb.group({
      name:['',[Validators.required]],
      subject:['',[Validators.required]],
      message:['',[Validators.required]],
      email:['',[Validators.required , Validators.email]],
      phone:['',[Validators.required , Validators.minLength(11) , Validators.maxLength(11)]],
    })
  }

  get name(){
    return this.contactFormGroup.get('name');
  }
  get subject(){
    return this.contactFormGroup.get('subject');
  }
  get message(){
    return this.contactFormGroup.get('message');
  }
  get phone(){
    return this.contactFormGroup.get('phone');
  }
  get email(){
    return this.contactFormGroup.get('email');
  }

  submit(){
    this.authService.contact(this.contactFormGroup.getRawValue()).subscribe((res:any) => {
      console.log(res.message);
      this.Message = res.message;
      // this.router.navigate(['home']);
    })
  }
}
