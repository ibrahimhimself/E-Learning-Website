import { Component, OnInit } from '@angular/core';
import { categoryServiceService } from 'src/app/service/category-service.service';

@Component({
  selector: 'app-our-experience-advisors',
  templateUrl: './our-experience-advisors.component.html',
  styleUrls: ['./our-experience-advisors.component.css']
})
export class OurExperienceAdvisorsComponent implements OnInit {

  advisorsList:any = [];
  constructor(private categoryService:categoryServiceService) { }

  ngOnInit(): void {
    this.categoryService.getAllInstructors().subscribe((advList:any) => {
      this.advisorsList = advList.data;
      // console.log(advList.data);
    })
  }
}