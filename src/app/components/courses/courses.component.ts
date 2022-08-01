import { Component, OnInit } from '@angular/core';
import { Icourses } from 'src/app/Models/icourses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  categoryName: string = 'Programming';
  categoryDiscription: string = 'Programming is the implementation of logic to facilitate specified computing operations and functionality. It occurs in one or more languages, which differ by application, domain and programming model.';

  // IT Development category ID => 1


  courseList: Icourses[];
  // courseList: Icourses = {
  //   courseID: 1, courseName:'HTML', catID: 1, imgURL: '../../../assets/images/courses/1.jpg', courseContentURL: '/courses'
  // };
  constructor() {
    this.courseList = [
      {courseID: 1, courseName:'HTML', catID: 1, imgURL: '../../../assets/images/courses/1.jpg', courseContentURL: '/courses'},
      {courseID: 2, courseName:'CSS', catID: 1, imgURL: '../../../assets/images/courses/2.jpg', courseContentURL: '/courses'},
      {courseID: 3, courseName:'JS', catID: 1, imgURL: '../../../assets/images/courses/3.jpg', courseContentURL: '/courses'},
      {courseID: 4, courseName:'Angular', catID: 1, imgURL: '../../../assets/images/courses/4.jpg', courseContentURL: '/courses'},
      {courseID: 1, courseName:'HTML', catID: 1, imgURL: '../../../assets/images/courses/1.jpg', courseContentURL: '/courses'},
      {courseID: 2, courseName:'CSS', catID: 1, imgURL: '../../../assets/images/courses/2.jpg', courseContentURL: '/courses'},
      {courseID: 3, courseName:'JS', catID: 1, imgURL: '../../../assets/images/courses/3.jpg', courseContentURL: '/courses'},
      {courseID: 4, courseName:'Angular', catID: 1, imgURL: '../../../assets/images/courses/4.jpg', courseContentURL: '/courses'},
    ]
  }

  ngOnInit(): void {
  }

}
