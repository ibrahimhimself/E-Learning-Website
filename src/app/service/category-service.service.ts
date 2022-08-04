import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { CoursesCat } from '../models/courses-cat';
import { Icourses } from '../models/icourses';
import { IcoursesSubCategories } from '../models/icourses-sub-categories';

@Injectable({
  providedIn: 'root'
})
export class categoryServiceService {


  constructor(private httpClient:HttpClient) {
    
  }

  getAllCategories():Observable<CoursesCat[]>{
    return this.httpClient.get<CoursesCat[]>(`${environment.APIBaseURL}/category`);
  }
  
  getAllSubCategories():Observable<IcoursesSubCategories[]>{
    return this.httpClient.get<IcoursesSubCategories[]>(`${environment.APIBaseURL}/subcategory`);
  }

  getAllCourses():Observable<Icourses[]>{
    return this.httpClient.get<Icourses[]>(`${environment.APIBaseURL}/course`);
  }

  getSubCategoryByCatID(CatID:number):Observable<CoursesCat>{
    return this.httpClient.get<CoursesCat>(`${environment.APIBaseURL}/getSubCategoriesByCategoryId/${CatID}`)
  }

  getCourseBySubCatID(SubCatID:number):Observable<IcoursesSubCategories>{
    return this.httpClient.get<IcoursesSubCategories>(`${environment.APIBaseURL}/getCourseBySubCategoryId/${SubCatID}`)
  }
}
