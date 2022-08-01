import { Component, OnInit } from '@angular/core';
import { IcoursesSubCategories } from 'src/app/models/icourses-sub-categories';

@Component({
  selector: 'app-course-sub-category',
  templateUrl: './course-sub-category.component.html',
  styleUrls: ['./course-sub-category.component.css']
})
export class CourseSubCategoryComponent implements OnInit {

  categoryName: string = 'Programming';
  categoryDiscription: string = 'Programming is the implementation of logic to facilitate specified computing operations and functionality. It occurs in one or more languages, which differ by application, domain and programming model.';

  // IT Development category ID => 1


  courseList: IcoursesSubCategories[];
  // courseList: Icourses = {
  //   courseID: 1, courseName:'HTML', catID: 1, imgURL: '../../../assets/images/courses/1.jpg', courseContentURL: '/courses'
  // };
  constructor() {
    this.courseList = [
      {courseID: 1, courseName:'HTML 1', catID: 1, imgURL: '../../../assets/images/courses/1.jpg', courseContentURL: '/courses'},
      {courseID: 1, courseName:'HTML 2', catID: 1, imgURL: '../../../assets/images/courses/1.jpg', courseContentURL: '/courses'},
      {courseID: 1, courseName:'HTML 3', catID: 1, imgURL: '../../../assets/images/courses/1.jpg', courseContentURL: '/courses'},
      {courseID: 1, courseName:'HTML 4', catID: 1, imgURL: '../../../assets/images/courses/1.jpg', courseContentURL: '/courses'},


    ]
  }

  ngOnInit(): void {
  }

}
