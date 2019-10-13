import { User } from './../models/user.model';
import { UserService } from './../services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService,
              private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form): void{
    // get form information
    const email = form.signupEmail;
    const pass = form.signupPassword;
    const retypePass = form.singupPasswordRetype;

    // create and add user
    // TODO validate retype password
    const newUser = new User(email, pass);
    this.userService.createUser(newUser);

    // TODO REMOVE
    console.log(this.userService.getUsers());

    // return to welcome page
    this.router.navigate(['/welcome']);
  }

}
