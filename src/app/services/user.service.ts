import { User } from './../models/user.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // Test data
  // TODO remove
  users: User[] = [
    new User('Test', 'pass'),
  ];

  constructor() { }

  // Add a new user to the database
  createUser(name: string, password: string): void {
    const newUser: User = new User(name, password);
    this.users.push(newUser);
  }

  // validate to move to the next page
  validateUser(name: string, password: string): boolean {
    for (const x in this.users) {
      if (this.users[x].getName() === name &&
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
