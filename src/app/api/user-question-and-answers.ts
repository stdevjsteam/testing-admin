import {Injectable} from '@angular/core';
import BaseApiService from './base.api.service';
import {AngularFireDatabase} from '@angular/fire/database';
import UserQuestionAnswerModel from '../models/user-question-answer-model';

const url = 'questionsAnswers';
@Injectable({
  'providedIn': 'root'
})
export class UserQuestionAndAnswers extends BaseApiService<UserQuestionAnswerModel> {
  constructor(public db: AngularFireDatabase) {
    super(db, url);
  }
}
