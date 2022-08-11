import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ExamAuthService } from '../../../auth/services/examAuth.service';
import { DoctorService } from '../../../doctor/services/doctor.service';


@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.scss']
})
export class ExamComponent implements OnInit {

  id:any;
  subject:any;
  user:any;
  studentInfo:any
  total:number = 0;
  showResult:boolean = false;
  usersubjects:any[] = [];
  validExam:boolean = true;
  constructor(private route:ActivatedRoute , private service:DoctorService ,private auth :ExamAuthService,
     private toaster:ToastrService) {
    this.id = this.route.snapshot.paramMap.get('id')
    this.getSubject()

   }

  ngOnInit(): void {
  }

  getSubject() {
    this.service.getSubject(this.id).subscribe(res => {
      this.subject = res
    })
  }

  getUserData() {
    this.auth.getStudent(this.user.userId).subscribe((res:any) => {
      this.studentInfo = res
      this.usersubjects = res?.subjects ?  res?.subjects : [];
      this.checkValidExam()
    })
  }

  getAnswer(event:any) {
    let value = event.value,
        questionIndex = event.source.name;
        this.subject.questions[questionIndex].studentAnswer = value
    console.log(this.subject.questions)
  }

  checkValidExam() {
    for(let x in this.usersubjects) {
      if(this.usersubjects[x].id == this.id) {
        this.total = this.usersubjects[x].degree
         this.validExam = false;
         this.toaster.warning("  You have already passed this exam  ")
      }
    }
  }

  delete(index:number) {
    this.subject.questions.splice(index , 1)
    const model = {
      name:this.subject.name,
      questions:this.subject.questions
    }

    this.service.updateSubject(model , this.id).subscribe(res => {
      this.toaster.success("The question has been successfully deleted")
    })
  }

  getResult() {
    this.total = 0
    for(let x in this.subject.questions) {
      if(this.subject.questions[x].studentAnswer == this.subject.questions[x].correctAnswer) {
        this.total++
      }
    }
    this.showResult = true
    this.usersubjects.push({
      name:this.subject.name,
      id:this.id,
      degree:this.total
    })
    const model = {
      username: this.studentInfo.username,
      email: this.studentInfo.email,
      password: this.studentInfo.password,
      subjects : this.usersubjects
    }
    console.log(this.total)
  }
}
