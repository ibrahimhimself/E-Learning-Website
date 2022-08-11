import { Component, OnInit } from '@angular/core';
import { ExamAuthService } from '../../../auth/services/examAuth.service';


@Component({
  selector: 'app-exam-navbar',
  templateUrl: './exam-navbar.component.html',
  styleUrls: ['./exam-navbar.component.scss']
})
export class ExamNavbarComponent implements OnInit {

  constructor(private service:ExamAuthService) { }
  user:any = null
  ngOnInit(): void {
   this.service.user.subscribe((res:any) => {
     if(res.role) {
       this.user = res
     }
   })
  }
}
