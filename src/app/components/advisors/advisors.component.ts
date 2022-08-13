import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-advisors',
  templateUrl: './advisors.component.html',
  styleUrls: ['./advisors.component.css']
})
export class AdvisorsComponent implements OnInit {

  instructorFormGroup!:FormGroup;

  constructor(
    private fb : FormBuilder,
    private router : Router,
    private authService : AuthService
  ) { }

  ngOnInit(): void {
    this.instructorFormGroup = this.fb.group({
      first_name:['',[Validators.required]],
      last_name:['',[Validators.required]],
      email:['',[Validators.required , Validators.email]],
      username:['',[Validators.required]],
      scientific_degree:['',[Validators.required]],
      password:['',[Validators.required]],
      description:['',[Validators.required]],
      phone:['',[Validators.required , Validators.minLength(11) , Validators.maxLength(11)]],
    })
  }

  get first_name(){
    return this.instructorFormGroup.get('first_name');
  }
  get last_name(){
    return this.instructorFormGroup.get('last_name');
  }
  get email(){
    return this.instructorFormGroup.get('email');
  }
  get scientific_degree(){
    return this.instructorFormGroup.get('scientific_degree');
  }
  get phone(){
    return this.instructorFormGroup.get('phone');
  }
  get username(){
    return this.instructorFormGroup.get('username');
  }
  get description(){
    return this.instructorFormGroup.get('description');
  }
  get password(){
    return this.instructorFormGroup.get('password');
  }

  submit(){
    this.authService.becomeInstructor(this.instructorFormGroup.getRawValue()).subscribe((res:any) => {
      console.log(res);
      
    })
  }
}
