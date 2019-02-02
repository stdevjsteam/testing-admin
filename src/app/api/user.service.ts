import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

import BaseApiService from './base.api.service';
import UserModel from '../models/user.model';

const url = 'internUsers';
@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseApiService<UserModel> {
  constructor(public db: AngularFireDatabase) {
    super(db, url);
  }
}
