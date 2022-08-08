import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { categoryServiceService } from 'src/app/service/category-service.service';


@Component({
  selector: 'app-instructor-details',
  templateUrl: './instructor-details.component.html',
  styleUrls: ['./instructor-details.component.css']
})
export class InstructorDetailsComponent implements OnInit {
  
  id:any
  data2:any = {}
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
    this.categoryService.getInstructorDetailsByID(this.id).subscribe((res:any) => {
      this.data2 = res.data;  
    })
  }
}
