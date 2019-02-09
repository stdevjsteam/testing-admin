import {Component, OnInit} from '@angular/core';
import {UserService} from './api/user.service';
import {UserQuestionAndAnswers} from './api/user-question-and-answers';
import {forkJoin, of} from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  internUsers;
  userTestResult;
  constructor(private userService: UserService,
              private userQuestionAndAnswers: UserQuestionAndAnswers) {

  }

  ngOnInit(): void {
    this.getData();

    // this.userQuestionAndAnswers.create(
    //   {
    //   userId: 'LY2XfLTlkSM_u2Uvjn0',
    //   userAllRightAnswers: 1,
    //   userQuestionAnswers: [
    //     {
    //       id: 1,
    //       question: 'question 1',
    //       rightAnswer: 3,
    //       userAnswer: 3,
    //       answers: [
    //         {answer: 'answer 1', key: 1},
    //         {answer: 'answer 2', key: 2},
    //         {answer: 'answer 3', key: 3},
    //         {answer: 'answer 4', key: 4}
    //       ],
    //     },
    //
    //     {
    //       id: 2,
    //       question: 'question 2',
    //       rightAnswer: 2,
    //       userAnswer: 4,
    //       answers: [
    //         {answer: 'answer 1', key: 1},
    //         {answer: 'answer 2', key: 2},
    //         {answer: 'answer 3', key: 3},
    //         {answer: 'answer 4', key: 4}
    //       ],
    //     },
    //
    //     {
    //       id: 3,
    //       question: 'question 3',
    //       rightAnswer: 1,
    //       userAnswer: 2,
    //       answers: [
    //         {answer: 'answer 1', key: 1},
    //         {answer: 'answer 2', key: 2},
    //         {answer: 'answer 3', key: 3},
    //         {answer: 'answer 4', key: 4}
    //       ]
    //     }
    //   ]
    // }
    // );
  }

  private getData(): void {
    Promise.all([this.userService.getAll(),
      this.userQuestionAndAnswers.getAll()]
    ).then((data) => {
        console.log(data);
    });
  }
}
