import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { categoryServiceService } from 'src/app/service/category-service.service';

@Component({
  selector: 'app-course-content',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.css']
})
export class CourseContentComponent implements OnInit {

  courseID:any ;
  data:any = [];

  constructor(private categoryService:categoryServiceService , private activateRoute:ActivatedRoute , public authService:AuthService) {
    
    this.courseID = this.activateRoute.snapshot.paramMap.get("courseID");
    // console.log(this.courseID);
  }


  ngOnInit(): void {

    this.categoryService.getCourseContentByCourseID(this.courseID).subscribe((res:any) => {
      this.data = res.data;
      console.log(res.data);
      
    })
  }

}
