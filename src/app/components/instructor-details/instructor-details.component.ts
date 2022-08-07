import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Advisors } from 'src/app/Models/advisors';
import { categoryServiceService } from 'src/app/service/category-service.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-instructor-details',
  templateUrl: './instructor-details.component.html',
  styleUrls: ['./instructor-details.component.css']
})
export class InstructorDetailsComponent implements OnInit {
  
  id:any
  data:any = {}
  constructor(
    private categoryService:categoryServiceService,
    private activeRouter:ActivatedRoute
  )
  {
    this.id = this.activeRouter.snapshot.paramMap.get("id");
    console.log(this.id);
  }

  ngOnInit(): void {

    this.getInstructor();    
  }

  getInstructor(){
    this.categoryService.getInstructorDetailsByID(this.id).subscribe(res => {
      this.data = res;
      console.log(res);
    })
  }
}
