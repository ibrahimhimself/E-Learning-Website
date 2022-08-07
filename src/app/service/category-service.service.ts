import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CoursesCat } from '../Models/courses-cat';
import { IcoursesSubCategories } from '../Models/icourses-sub-categories';

@Injectable({
  providedIn: 'root'
})
export class categoryServiceService {

  constructor(private httpClient:HttpClient) {}

  getAllCategories():Observable<CoursesCat[]>{
    return this.httpClient.get<CoursesCat[]>(`${environment.APIBaseURL}/category`);
  }

  getSubCategoryByCatID(CatID:number):Observable<CoursesCat>{
    return this.httpClient.get<CoursesCat>(`${environment.APIBaseURL}/getSubCategoriesByCategoryId/${CatID}`)
  }

  getCourseBySubCatID(SubCatID:number):Observable<IcoursesSubCategories>{
    return this.httpClient.get<IcoursesSubCategories>(`${environment.APIBaseURL}/getCourseBySubCategoryId/${SubCatID}`)
  }

  getAllInstructors(){
    return this.httpClient.get(`${environment.APIBaseURL}/instructors`)
  }

  getInstructorDetailsByID(insID:any){
    return this.httpClient.get(`${environment.APIBaseURL}/instructors/${insID}`)
  }
}
