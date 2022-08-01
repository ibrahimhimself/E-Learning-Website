import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Courses } from 'src/app/models/courses';
import { CoursesCat } from 'src/app/models/courses-cat';
import { categoryServiceService } from 'src/app/service/category-service.service';

@Component({
  selector: 'app-our-categories',
  templateUrl: './our-categories.component.html',
  styleUrls: ['./our-categories.component.css']
})
export class OurCategoriesComponent implements OnInit , OnChanges {

  coursesCat:any= [];
  constructor(private categoryService:categoryServiceService) {

  }

  ngOnChanges(): void {
    
  }

  ngOnInit(): void {

    this.categoryService.getAllCategories().subscribe(catList => {
      this.coursesCat = catList;
    })

  }

  // subCategory(itemID:number){
  //   this.categoryService.getSubCategoryByCatID(itemID).subscribe(catList => {
  //     this.coursesCat = catList ;
  //   })
  // }

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
