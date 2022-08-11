import { Component, OnInit } from '@angular/core';
import { ExamAuthService } from './components/exam/auth/services/examAuth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Final-Project-Angular';
  constructor(private service:ExamAuthService){}
  
  ngOnInit(): void {
  }

}
