import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { CoursesComponent } from './components/courses/courses.component';
import { HomeComponent } from './components/home/home.component';
import { AdvisorsComponent } from './components/advisors/advisors.component';
import { OurCategoriesComponent } from './components/our-categories/our-categories.component';
import { MainLayoutComponent } from './components/main-layout/main-layout.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

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
      {path:'', component: HomeComponent},
      {path:'contact-us', component: ContactUsComponent},
      {path:'home', component: HomeComponent},
      {path:'courses', component: CoursesComponent},
      {path:'advisors', component: AdvisorsComponent},
      {path:'aboutUs', component: AboutUsComponent},
      {path:'ourCategories', component: OurCategoriesComponent},
      {path:'**', component: NotFoundComponent},
  ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
