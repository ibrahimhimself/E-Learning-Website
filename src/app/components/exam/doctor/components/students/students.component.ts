import { Component, OnInit } from '@angular/core';
import { ExamAuthService } from '../../../auth/services/examAuth.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {
  dataSource:any
  datatable:any
  displayedColumns:any
  constructor(private service:ExamAuthService) {
    this.displayedColumns = ['position', 'name', 'subjectName', 'degree'];
   }

  
  ngOnInit(): void {
    this.getStudents()
  }


  getStudents() {
    this.service.getUsers('students').subscribe((res:any) => {
      this.dataSource = res?.map((student:any) => {
        if(student?.subjects) {
          return student?.subjects?.map((sub:any) => {
            return {
              name:student.username,
              subjectName:sub.name,
              degree:sub.degree
            }
          })
        }else {
          return [{
            name:student.username,
            subjectName:"-",
            degree:"-"
          }]
        }
       
      })
      console.log(this.dataSource)
      this.datatable = [];

      this.dataSource.forEach((item:any) => {
        item.forEach((subItem:any) => {
          this.datatable.push({
            name:subItem.name,
            subjectName:subItem.subjectName,
            degree:subItem.degree
          })
        })
      })
    })
    
  }
}
