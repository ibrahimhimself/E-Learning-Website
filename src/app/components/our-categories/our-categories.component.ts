import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { CoursesCat } from 'src/app/Models/courses-cat';
import { categoryServiceService } from 'src/app/service/category-service.service';

@Component({
  selector: 'app-our-categories',
  templateUrl: './our-categories.component.html',
  styleUrls: ['./our-categories.component.css']
})
export class OurCategoriesComponent implements OnInit , OnChanges {

  coursesCat:any= [];
  constructor(private categoryService:categoryServiceService) {}

  ngOnChanges(): void {
    
  }

  ngOnInit(): void {

    this.categoryService.getAllCategories().subscribe(catList => {
      this.coursesCat = catList;
    })

  }
}
