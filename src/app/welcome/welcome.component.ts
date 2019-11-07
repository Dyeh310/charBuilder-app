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
  autheticate: boolean = true;
  loginEmail: any;
  loginPassword: any;

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
    this.validateUser(email, pass, form);
  }

  // validate user
  validateUser(email: string, password: string, form): void {
    this.autheticate = this.userService.validateUser(email, password);
    // add functionality to nagivate to the character list page.
    if (this.autheticate) {
      this.router.navigate(['/character-list']);
    }
  }

  // update user list
  getUsers(): void {
    this.users = this.userService.getUsers();
  }
}
