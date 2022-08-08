import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { MatrialModule } from './matrial.module';
import { ExamNavbarComponent } from './components/exam-navbar/exam-navbar.component';



@NgModule({
  declarations: [
    ExamNavbarComponent
  ],
  imports: [
    MatrialModule,
    ReactiveFormsModule,
    CommonModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    RouterModule,
    BrowserModule
  ],
  exports:[
    HttpClientModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule,
    MatrialModule,
    CommonModule,
    ExamNavbarComponent
  ]
})
export class SharedModule { }
