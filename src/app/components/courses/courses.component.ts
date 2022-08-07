import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { categoryServiceService } from 'src/app/service/category-service.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  subCatId:any;
  data:any = {};

  constructor(private categoryService:categoryServiceService , private activateRoute:ActivatedRoute) {
    this.subCatId = this.activateRoute.snapshot.paramMap.get("subCatID");
    console.log(this.subCatId);
    
  }

  ngOnInit(): void {

    this.categoryService.getCourseBySubCatID(this.subCatId).subscribe(res => {
      this.data = res
    })
  }

}
