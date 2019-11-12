import { User } from './../models/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: User[] = [];

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
      }
    }
    return false;
  }

  // retrieve all users
  getUsers(): User[] {
    return this.users;
  }

}
