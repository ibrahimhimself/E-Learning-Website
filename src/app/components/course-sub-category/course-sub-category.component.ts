import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesCat } from 'src/app/Models/courses-cat';
import { IcoursesSubCategories } from 'src/app/Models/icourses-sub-categories';
import { categoryServiceService } from 'src/app/service/category-service.service';

@Component({
  selector: 'app-course-sub-category',
  templateUrl: './course-sub-category.component.html',
  styleUrls: ['./course-sub-category.component.css']
})
export class CourseSubCategoryComponent implements OnInit {

  // subCatList: IcoursesSubCategories[] = [];
  catID:any;
  data:any = {};

  constructor(private categoryService:categoryServiceService,
              private router:Router, 
              private activeRouter:ActivatedRoute,
    )
  {
    this.catID = this.activeRouter.snapshot.paramMap.get("catID");
    console.log(this.catID);
    
  }

  ngOnInit(): void {

    this.categoryService.getSubCategoryByCatID(this.catID).subscribe(res => {
      this.data = res;
    })

  }

}
