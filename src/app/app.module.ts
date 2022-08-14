import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OurCategoriesComponent } from './components/our-categories/our-categories.component';
import { OurExperienceAdvisorsComponent } from './components/our-experience-advisors/our-experience-advisors.component';
import { WhatOurStudentsSayComponent } from './components/what-our-students-say/what-our-students-say.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdvisorsComponent } from './components/advisors/advisors.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { CourseContentComponent } from './components/course-content/course-content.component';
import { CourseSubCategoryComponent } from './components/course-sub-category/course-sub-category.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './auth.guard';
import { AuthService } from './service/auth.service';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';
import { InstructorDetailsComponent } from './components/instructor-details/instructor-details.component';
import { AuthModule } from './components/exam/auth/auth.module';
import { SharedModule } from './components/exam/shared/shared.module';
import { StudentModule } from './components/exam/student/student.module';
import { DoctorModule } from './components/exam/doctor/doctor.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AboutUsComponent,
    OurExperienceAdvisorsComponent,
    WhatOurStudentsSayComponent,
    FooterComponent,
    SearchComponent,
    OurCategoriesComponent,
    CoursesComponent,
    ContactUsComponent,
    NotFoundComponent,
    AdvisorsComponent,
    LoginComponent,
    RegisterComponent,
    CourseContentComponent,
    CourseSubCategoryComponent,
    StudentProfileComponent,
    MyCoursesComponent,
    InstructorDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    AuthModule,
    DoctorModule,
    SharedModule,
    StudentModule
    ],
  providers: [AuthService , AuthGuard , 
  {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
