import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ExamAuthService } from '../../../auth/services/examAuth.service';
import { DoctorService } from '../../services/doctor.service';

@Component({
  selector: 'app-subjects',
  templateUrl: './subjects.component.html',
  styleUrls: ['./subjects.component.scss']
})
export class SubjectsComponent implements OnInit {

  constructor(private service:DoctorService , private auth:ExamAuthService , private toaster:ToastrService) { }
  subjects:any[] = [];
  user:any = {}
  ngOnInit(): void {
    this.getSubjects()
  }

  getSubjects() {
    this.service.getAllSubjects().subscribe((res:any) => {
      this.subjects = res
    })
  }

  delete(index:number) {
    let id  = this.subjects[index].id
    this.subjects.splice(index , 1)
    this.service.deleteSubject(id).subscribe(res => {
      this.toaster.success(" The Course has been removed successfully ")
    })
  }
}
