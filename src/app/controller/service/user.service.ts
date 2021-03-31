import { Injectable } from '@angular/core';
import {Chaine} from '../model/chaine.model';
import {User} from '../model/user.model';
import {init} from 'protractor/built/launcher';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _user: User;
  private _users: Array<User>;
  private _indice: number;

  // tslint:disable-next-line:typedef
   public update(index: number, user: User) {
    this.user = this.clone(user);
    this._indice = index;
  }

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  get users(): Array<User> {
    return this._users;
  }

  set users(value: Array<User>) {
    this._users = value;
  }

  get indice(): number {
    return this._indice;
  }

  set indice(value: number) {
    this._indice = value;
  }

  // tslint:disable-next-line:typedef
  private clone(user: User) {
    const myClone1 = new User();
    myClone1.id = user.id;

    myClone1.prenom = user.prenom;
    myClone1.nom = user.nom;
    myClone1.login = user.login;
    myClone1.password = user.password;
    return myClone1;

  }



  constructor() { }

  // tslint:disable-next-line:typedef
  public save() {
    if (this.user.id == null) {
      this.user.id = this.users.length + 1;
      this.users.push(this.clone(this.user));
    } else {
      this.users[this._indice] = this.clone(this.user);
    }
    this.user = null;
  }


// tslint:disable-next-line:align typedef
    public init() {
      // tslint:disable-next-line:variable-name
      for (let _i = 1; _i < 5; _i++) {

        const myUser = new User();
        myUser.id = _i;
        myUser.login = 'login1' + _i;
        myUser.password = '123456' + _i;
        myUser.nom = 'ali' + _i;
        myUser.prenom = 'abdesalam ' + _i;
        this.users.push(myUser);
      }
    }
}
