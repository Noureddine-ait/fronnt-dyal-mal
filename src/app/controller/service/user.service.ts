import {Injectable} from '@angular/core';
import {Chaine} from '../model/chaine.model';
import {User} from '../model/user.model';
import {init} from 'protractor/built/launcher';
import {HttpClient} from '@angular/common/http';
import {findAll} from '@angular/compiler-cli/ngcc/src/utils';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private urlBase = 'http://localhost:8036';
  private url = '/chaine-youtube/';
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


  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  public save() {
    if (this.user.id == null) {
      this.http.post(this.urlBase + this.url + '/', this.user).subscribe(
        data => {
          if (data > 0) {
            console.log(this.user);
            const myClone = this.clone(this.user);
            console.log(myClone);
            this.findAll();
          } else {
            alert('erreur lors de l ajoute de user code  !! :' + data);
          }
        }
      );
    }
  }

  // tslint:disable-next-line:typedef
  public findAll() {
    this.http.get<Array<User>>(this.urlBase + this.url + '/').subscribe(
      data => {
        this.users = data;
      }, error => {
        console.log(error);
      }
    );

  }
}
