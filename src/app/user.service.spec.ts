import { USERS } from './USERS';
import { User } from './user';
import { fakeAsync, inject, TestBed, tick } from '@angular/core/testing';

import { UserService } from './user.service';

describe('UserService', () => {
  let service: UserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("Get User when none is set", fakeAsync( () => {
    let result: User;
    service.getUser().subscribe(user => result = user);

    tick();

    expect(result).toEqual(undefined);
  }));

  it("Get User when USERS[0] is set", fakeAsync( () =>{
    service.validateCredetials("dummy@gmail.com","test123").subscribe();

    tick();
    let result: User;
    service.getUser().subscribe(user => result = user);

    tick();

    expect(result).toEqual(USERS[0]);
  }));

  it("Validate correct credentials for USERS[0]", fakeAsync( () =>{
    let result: User;
    service.validateCredetials("dummy@gmail.com","test123").subscribe(user => result = user);

    tick();

    expect(result).toEqual(USERS[0]);
  }));

  it("Validate incorrect Password for USERS[0]", fakeAsync( () =>{
    let result: User;
    service.validateCredetials("dummy@gmail.com","test1234").subscribe(user => result = user);

    tick();

    expect(result).toEqual(undefined);
  }));

  it("Validate incorrect Password for USERS[0]", fakeAsync( () =>{
    let result: User;
    service.validateCredetials("dummy@hotmail.com","test123").subscribe(user => result = user);

    tick();

    expect(result).toEqual(undefined);
  }));

});
