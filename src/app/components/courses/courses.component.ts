import { Component, OnInit } from '@angular/core';
import { Icourses } from 'src/app/Models/icourses';
import { categoryServiceService } from 'src/app/service/category-service.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  categoryName: string = 'Programming';
  categoryDiscription: string = 'Programming is the implementation of logic to facilitate specified computing operations and functionality. It occurs in one or more languages, which differ by application, domain and programming model.';

  // IT Development category ID => 1


  courseList: Icourses[] = [];
  // courseList: Icourses = {
  //   courseID: 1, courseName:'HTML', catID: 1, imgURL: '../../../assets/images/courses/1.jpg', courseContentURL: '/courses'
  // };
  constructor(private categoryService:categoryServiceService) {
    
  }

  ngOnInit(): void {

    this.categoryService.getAllCourses().subscribe(subCategoryList => {
      this.courseList = subCategoryList;
    })
  }

}
