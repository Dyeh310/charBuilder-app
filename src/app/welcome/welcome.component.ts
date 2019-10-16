import { User } from './../models/user.model';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  users: User[];
  validForm: boolean;

  constructor(private userService: UserService,
              private router: Router) {}

  ngOnInit() {
  }

  // submit entire form
  onSubmit(form): void {
    // get user information
    const email = form.loginEmail;
    const pass = form.loginPassword;

    // validate user information
    this.validateUser(email, pass);
  }

  // validate user
  validateUser(email: string, password: string): void {
    const autheticate: boolean = this.userService.validateUser(email, password);
    // add functionality to nagivate to the character list page.
    if (autheticate) {
      this.router.navigate(['/character-list']);
    } else {
      console.log(this.userService.getUsers());
    }

  }

  // update user list
  getUsers(): void {
    this.users = this.userService.getUsers();
  }
}
