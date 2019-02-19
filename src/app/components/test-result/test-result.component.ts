import { Component, OnInit } from '@angular/core';
import {UserQuestionAndAnswers} from '../../api/user-question-and-answers';
import {UserService} from '../../api/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-result',
  templateUrl: './test-result.component.html',
  styleUrls: ['./test-result.component.scss']
})
export class TestResultComponent implements OnInit {

  private internUsers;
  private userTestResult;
  testResult = [];
  constructor(private userService: UserService,
              private router: Router,
              private userQuestionAndAnswers: UserQuestionAndAnswers) {

  }

  ngOnInit(): void {
    this.getData();
  }

  private getData(): void {
    this.userQuestionAndAnswers.getAll().subscribe(result => {
      this.userTestResult = result;
      this.setUserInfo();
    });
    this.userService.getAll().subscribe(users => {
      this.internUsers = users;
      this.setUserInfo();
    });
  }
  private setUserInfo(): void {
    if (this.internUsers && this.userTestResult) {
      for (const item in this.userTestResult) {
        this.userTestResult[item].questionCount = this.userTestResult[item].userQuestionAnswers.length;
        this.testResult.push({
          testResult: this.userTestResult[item],
          user: this.internUsers[this.userTestResult[item].userId]
        });
      }
    }
  }
}
