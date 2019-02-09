import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

import BaseApiService from './base.api.service';
import UserModel from '../models/user.model';

const url = 'internUsers';
@Injectable({
  'providedIn': 'root'
})
export class UserService extends BaseApiService<UserModel> {
  constructor(public db: AngularFireDatabase) {
    super(db, url);
  }


  cratePass() {
// db: AngularFireDatabase
    const itemRef = this.db.object('security');

// set() for destructive updates
    console.log('angular', 'angular');
    itemRef.set({ password: 'angular'});
  }
}
