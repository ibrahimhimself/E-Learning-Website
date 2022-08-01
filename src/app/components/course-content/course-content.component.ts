import { Component, OnInit } from '@angular/core';

import { Ilessons } from 'src/app/Models/ilessons';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.css']
})
export class CourseContentComponent implements OnInit {


  categoryName: string = 'Programming';
  categoryDiscription: string = 'Programming is the implementation of logic to facilitate specified computing operations and functionality. It occurs in one or more languages, which differ by application, domain and programming model.';

  // IT Development category ID => 1


  lessonList: Ilessons[];
  // courseList: Icourses = {
  //   lessonNumber: 1, lessonName:'HTML', catID: 1,
  // };
  constructor() {
    this.lessonList = [
      {lessonNumber: 1, lessonName:' تعلم HTML في 2021 - درس 01# - مقدمة وماذا تحتاج لتتعلم', lessonURL: 'https://www.youtube.com/watch?v=6QAELgirvjs', duration: '11:04' ,catID: 1,},

      {lessonNumber: 2, lessonName:' تعلم HTML في 2021 - درس 02# - عناصر اللغة والمتصفح ', lessonURL: 'https://www.youtube.com/watch?v=7LxA9qXUY5k', duration: '4:14' , catID: 1,},

      {lessonNumber: 3, lessonName:' تعلم HTML في 2021 - درس 03# - إنشاء مشروعك الأول وصفحتك الأولى ',lessonURL: 'https://www.youtube.com/watch?v=QG5aEmS9Fu0', duration: ' 9:03' , catID: 1,},

      {lessonNumber: 4, lessonName:' تعلم HTML في 2021 - درس 04# - عنصر ال Head والعناصر الداخلية ', lessonURL: 'https://www.youtube.com/watch?v=dVgTBEYCseU', duration: ' 8:00' , catID: 1,},

      {lessonNumber: 5, lessonName:' تعلم HTML في 2021 - درس 05# - التعليقات وأمثلة على إستخدامها ', lessonURL: 'https://www.youtube.com/watch?v=3lXuWHtm7PM&t=1s', duration: '4:52' , catID: 1,},

    ]
  }


  ngOnInit(): void {
  }

}
