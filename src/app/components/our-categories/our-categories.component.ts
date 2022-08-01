import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Courses } from 'src/app/models/courses';
import { CoursesCat } from 'src/app/models/courses-cat';
import { categoryServiceService } from 'src/app/service/category-service.service';

@Component({
  selector: 'app-our-categories',
  templateUrl: './our-categories.component.html',
  styleUrls: ['./our-categories.component.css']
})
export class OurCategoriesComponent implements OnInit {

  courses:Courses|undefined = undefined;
  // coursesList:Courses[];
  // coursesCat:CoursesCat[];
  constructor(private categoryService:categoryServiceService, private router:Router) {

    // this.coursesList = this.categoryService.coursesList;
    // this.coursesCat = this.categoryService.coursesCat;
  }

  ngOnInit(): void {
  }


  // searchByCourseCat(courseItem:string){
  //   let foundedCourse = this.categoryService.searchCourseByCat(courseItem);
  //   if(foundedCourse)
  //   {
  //     this.courses = foundedCourse;
  //   }
  //   else{
  //     alert("This Course Not Founded")
  //   }
  // }
}
