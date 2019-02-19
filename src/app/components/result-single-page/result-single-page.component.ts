import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {UserQuestionAndAnswers} from '../../api/user-question-and-answers';

@Component({
  selector: 'app-result-single-page',
  templateUrl: './result-single-page.component.html',
  styleUrls: ['./result-single-page.component.scss']
})
export class ResultSinglePageComponent {
  userTestResult;
  userQuestionAnswers;

  constructor(private router: ActivatedRoute,
              private userQuestionAndAnswers: UserQuestionAndAnswers) {
    this.router.params.subscribe(params => {
      this.userQuestionAndAnswers.getByKey(params.id).valueChanges().subscribe(res => {
        this.userTestResult = res[0];
        this.userQuestionAnswers = this.userTestResult.userQuestionAnswers;
        console.log(this.userTestResult.userQuestionAnswers);
      });
    }) ;
  }
}
