import { User } from './../models/user.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService) {}

  ngOnInit() {
  }

  // validate user
  validateUser(name: string, password: string): void {
    let autheticate: boolean = this.userService.validateUser(name, password);
    // add functionality to nagivate to the character list page.
  }

  // update user list
  getUsers(): void {
    this.users = this.userService.getUsers();
  }
}
