import { User } from './../models/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Test data
  // TODO remove
  users: User[] = [
    new User('Test@gmail.com', 'pass'),
  ];

  constructor() { }

  // Add a new user to the database
  createUser(newUser: User): void {
    this.users.push(newUser);
  }

  // validate to move to the next page
  validateUser(email: string, password: string): boolean {
    for (const x in this.users) {
      if (this.users[x].getEmail() === email &&
            this.users[x].getPassword() === password) {
        return true;
      } else {
        return false;
      }
    }
  }

  // retrieve all users
  getUsers(): User[] {
    return this.users;
  }

}
