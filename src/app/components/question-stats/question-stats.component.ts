import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserQuestionAndAnswers} from '../../api/user-question-and-answers';
import {UserService} from "../../api/user.service";

@Component({
  selector: 'app-result-single-page',
  templateUrl: './question-stats.component.html',
})
export class QuestionStatsComponent implements OnInit {
  userTestResult;
  internUsers;
  questionStats = [];
  questions = [];

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
      this.setQuestionStats();
    });
  }

  private setQuestionStats(): void {
    if (this.userTestResult) {
      const values: {
        userQuestionAnswers: {
          question: string,
          rightAnswer: number,
          userAnswer: number,
          id: number
        }[], }[] = Object.values(this.userTestResult);
      for (const value of values) {
        for (const question of value.userQuestionAnswers) {
          if (question.rightAnswer === question.userAnswer) {
            if (typeof this.questionStats[question.id - 1] === 'number') {
              this.questionStats[question.id - 1] += 1;
            } else {
              this.questionStats[question.id - 1] = 0;
            }
          }
        }
      }
      for (const question of values[0].userQuestionAnswers) {
        this.questions.push(question.question);
      }
      const countOfContestants = Object.keys(this.userTestResult).length;
      for (let i = 0; i < this.questionStats.length; ++i) {
        this.questionStats[i] = {
          percentage: this.questionStats[i] * 100 / countOfContestants,
          question: this.questions[i]
        };
      }
    }
  }
}
