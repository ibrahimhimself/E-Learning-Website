import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoursesCat } from 'src/app/models/courses-cat';
import { IcoursesSubCategories } from 'src/app/models/icourses-sub-categories';
import { categoryServiceService } from 'src/app/service/category-service.service';

@Component({
  selector: 'app-course-sub-category',
  templateUrl: './course-sub-category.component.html',
  styleUrls: ['./course-sub-category.component.css']
})
export class CourseSubCategoryComponent implements OnInit {

  subCatList: IcoursesSubCategories[] = [];
  subCat:any|undefined = undefined;
  catIDList:any = [];
  currentcatID:number = 0;
  currentIndex:number = 0;

  constructor(private categoryService:categoryServiceService,
              private router:Router, 
              private activeRouter:ActivatedRoute,
    ) {
    
  }

  ngOnInit(): void {
    
    this.categoryService.getAllSubCategories().subscribe(subCategoryList => {
      this.subCatList = subCategoryList;
    })



    // this.catIDList =  this.categoryService.getAllCategories();
    // this.activeRouter.paramMap.subscribe(paramMap=>{
    //   this.currentcatID=(paramMap.get('itemID'))?Number(paramMap.get('itemID')):0;
    //   let foundedProduct = this.categoryService.getSubCategoryByCatID(this.currentcatID);
    //   if(foundedProduct){
    //       this.subCat = foundedProduct;
    //     }
    //     else
    //     {
    //       alert('Product Not Founded');
    //       // this.location.back();
    //     }
    // })
  }

}
