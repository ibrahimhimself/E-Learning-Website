import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OurLatestCoursesComponent } from './components/our-latest-courses/our-latest-courses.component';
import { OurExperienceAdvisorsComponent } from './components/our-experience-advisors/our-experience-advisors.component';
import { WhatOurStudentsSayComponent } from './components/what-our-students-say/what-our-students-say.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SearchComponent } from './components/search/search.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutUsComponent,
    OurLatestCoursesComponent,
    OurExperienceAdvisorsComponent,
    WhatOurStudentsSayComponent,
    FooterComponent,
    SearchComponent,
    CoursesComponent,
    ContactUsComponent,
    MainLayoutComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
