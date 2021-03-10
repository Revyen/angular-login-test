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
    this.user = USERS.find(user => user.e_mail == e_mail && user.password == password)
    const Observer = of(this.user);
    return Observer;
  }

  getUser(): Observable<User>{
    return of(this.user);
  }
}
