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
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { StudentProfileComponent } from './components/student-profile/student-profile.component';
import { AuthGuard } from './auth.guard';
import { MyCoursesComponent } from './components/my-courses/my-courses.component';
import { InstructorDetailsComponent } from './components/instructor-details/instructor-details.component';

const routes: Routes = [
      {path:'', redirectTo: '/home', pathMatch: 'full'}, // Default path
      {path:'home', component: HomeComponent},
      {path:'about', component: AboutUsComponent},
      {path:'courses/:subCatID', component: CoursesComponent},
      {path:'advisors', component: AdvisorsComponent},
      {path:'instructorDetails/:id', component: InstructorDetailsComponent},
      {path:'ourCategories', component: OurCategoriesComponent},
      {path:'contact-us', component: ContactUsComponent},
      {path:'Signup', component: RegisterComponent},
      {path:'Login', component: LoginComponent},
      {path:'CourseContent', component: CourseContentComponent},
      {path:'CourseSubCategory/:catID', component: CourseSubCategoryComponent},
      {path:'myCourses', component: MyCoursesComponent},
      {path:'profile', component: StudentProfileComponent, canActivate:[AuthGuard]},
      {path:'**', component: NotFoundComponent}, // Wild card
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
