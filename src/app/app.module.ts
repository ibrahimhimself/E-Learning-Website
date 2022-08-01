import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { OurCategoriesComponent } from './components/our-categories/our-categories.component';
import { OurExperienceAdvisorsComponent } from './components/our-experience-advisors/our-experience-advisors.component';
import { WhatOurStudentsSayComponent } from './components/what-our-students-say/what-our-students-say.component';
import { FooterComponent } from './components/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { CoursesComponent } from './components/courses/courses.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AdvisorsComponent } from './components/advisors/advisors.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    AboutUsComponent,
    OurCategoriesComponent,
    OurExperienceAdvisorsComponent,
    WhatOurStudentsSayComponent,
    FooterComponent,
    SearchComponent,
    CoursesComponent,
    ContactUsComponent,
    MainLayoutComponent,
    NotFoundComponent,
    AdvisorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
