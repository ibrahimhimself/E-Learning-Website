import { Injectable } from '@angular/core';
import { Courses } from '../models/courses';
import { CoursesCat } from '../models/courses-cat';

@Injectable({
  providedIn: 'root'
})
export class categoryServiceService {

  coursesList:Courses[];
  coursesCat:CoursesCat[];
  constructor() {

    this.coursesList = [
      {id:1 , name:'CCNA' , img:'assets/images/courses/1.jpg' , catID:1},
      {id:2 , name:'HTML' , img:'assets/images/courses/2.jpg' , catID:2},
      {id:3 , name:'Illustrator' , img:'assets/images/courses/3.jpg' , catID:3},
      {id:4 , name:'Social Media' , img:'assets/images/courses/4.jpg' , catID:4},
      {id:5 , name:'Photoshop' , img:'assets/images/courses/5.jpg' , catID:5},
      {id:6 , name:'Cryptocurrencies' , img:'assets/images/courses/6.jpg' , catID:6},

    ],
    this.coursesCat = [
      {id:1 , name:"IT" , imgURL:'assets/images/courses/1.jpg' , contain:50},
      {id:2 , name:"Web-Development" , imgURL:'assets/images/courses/2.jpg' , contain:75},
      {id:3 , name:"Adobe Program" , imgURL:'assets/images/courses/3.jpg' , contain:53},
      {id:4 , name:"Social-Media" , imgURL:'assets/images/courses/4.jpg' , contain:20},
      {id:5 , name:"Adobe Program" , imgURL:'assets/images/courses/5.jpg' , contain:10},
      {id:6 , name:"Currencies" , imgURL:'assets/images/courses/6.jpg' , contain:7},
    ]
  }


  searchCourseByCat(courseName:string):Courses|undefined{
    return this.coursesList.find(item=>item.name == courseName);
  }
}
