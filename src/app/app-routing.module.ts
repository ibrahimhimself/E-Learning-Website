import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AdvisorsComponent } from './components/advisors/advisors.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CourseContentComponent } from './components/course-content/course-content.component';
import { CourseSubCategoryComponent } from './components/course-sub-category/course-sub-category.component';
import { CoursesComponent } from './components/courses/courses.component';
import { HomeComponent } from './components/home/home.component';
import { OurCategoriesComponent } from './components/our-categories/our-categories.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';

// const routes: Routes = [
//   {path:'', component:MainLayoutComponent , children:[
//     {path:'contact-us', component: ContactUsComponent},
//     {path:'home', component: HomeComponent},
//     // {path:'advisors', component: },
//     {path:'courses', component: CoursesComponent},
//   ]},
//     {path:'**', component: NotFoundComponent},
// ];

const routes: Routes = [
      {path:'', redirectTo: '/home', pathMatch: 'full'}, // Default path
      {path:'home', component: HomeComponent},
      {path:'about', component: AboutUsComponent},
      {path:'Advisors', component: AdvisorsComponent},
      {path:'courses', component: CoursesComponent},
      {path:'advisors', component: AdvisorsComponent},
      {path:'aboutUs', component: AboutUsComponent},
      {path:'ourCategories', component: OurCategoriesComponent},
      {path:'**', component: NotFoundComponent},
      {path:'contact-us', component: ContactUsComponent},
      {path:'Signup', component: RegisterComponent},
      {path:'Login', component: LoginComponent},
      {path:'CourseContent', component: CourseContentComponent},
      {path:'CourseSubCategory', component: CourseSubCategoryComponent},
      {path:'**', component: NotFoundComponent}, // Wild card
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
