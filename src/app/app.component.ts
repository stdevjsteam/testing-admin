import {Component, OnInit} from '@angular/core';
import {UserService} from './api/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  internUsers;
  constructor(private userService: UserService) {

  }

  ngOnInit(): void {
    const users$ = this.userService.getAll();
    users$.subscribe(users => this.internUsers = users);
  }
}
