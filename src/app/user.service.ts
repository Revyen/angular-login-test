import { USERS } from './USERS';
import { User } from './user';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user?: User;

  constructor() { }

  validateCredetials(e_mail: string, password: string): Observable<User> {
    const User = of(USERS.find(user => user.e_mail == e_mail && user.password == password));
    return User;
  }

  setUser(user: User){
    this.user = user;
  }

  getUser(){
    return this.user;
  }

  getFirst(){
    return USERS[0];
  }
}
