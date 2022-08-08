import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExamLoginComponent } from './components/exam-login/exam-login.component';
import { ExamRegisterComponent } from './components/exam-register/exam-register.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    ExamLoginComponent,
    ExamRegisterComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ]
})
export class AuthModule { }
