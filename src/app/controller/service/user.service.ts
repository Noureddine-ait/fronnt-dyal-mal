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
  private _urlBase = 'http://localhost:8036';
  private _url = '/user-youtube/user';
  private _urlChaine = 'http://localhost:8036/chaine-youtube/chaine/';
  private _user: User;
  private _chaine: Chaine;
  private _users: Array<User>;
  private _index: number;

  constructor(private http: HttpClient) {
  }

  // tslint:disable-next-line:typedef
  public addUser() {
    this.user.chaines.push(this.cloneChaine(this.chaine));
  }


  // tslint:disable-next-line:typedef
  public update(index: number, user: User) {

    this.user = this.cloneUser(user);
    this._index = index;
    // @ts-ignore
    this.user.chaines = this.findChaineByUserReference(user);
  }


  // tslint:disable-next-line:typedef
  private cloneUser(user: User) {
    const myClone = new User();
    myClone.id = user.id;
    myClone.ref = user.ref;
    myClone.login = user.login;
    myClone.password = user.password;
    return myClone;
  }


  // tslint:disable-next-line:typedef
  public save() {

    if (this.user.id == null) {
      const myUser = this.cloneUser(this.user);
      console.log('myy user ' + myUser);
      this.http.post(this._urlBase + this._url + '/', this.user).subscribe(
        data => {
          if (data > 0) {
            console.log(this.user);
            this.users.push(myUser);
          } else {
            alert('echec !!' + data);
          }
        }
      );
    } else {
      this.http.put(this._urlBase + this._url + '/', this.user).subscribe(
        data => {
          this.users[this._index] = this.user;
        }
      );
    }
    this.user = null;
    this.chaine = null;

  }

  get chaine(): Chaine {
    if (this._chaine == null) {
      this._chaine = new Chaine();
    }
    return this._chaine;
  }

  set chaine(value: Chaine) {
    this._chaine = value;
  }

  // tslint:disable-next-line:typedef
  private cloneChaine(chaine: Chaine) {
    const myClone = new Chaine();
    myClone.ref = chaine.ref;
    myClone.titre = chaine.titre;
    myClone.nombreAbonnee = chaine.nombreAbonnee;
    return myClone;
  }

  // tslint:disable-next-line:typedef
  public findChaineByUserReference(user: User) {
    this.http.get<Array<Chaine>>(this._urlChaine + 'user-ref/ref/' + user.ref).subscribe(
      data => {
        this.user.chaines = data;
      }
    );

  }

  // tslint:disable-next-line:typedef
  public findAll() {

    this.http.get<Array<User>>('http://localhost:8036/user-youtube/user/').subscribe(
      data => {
        console.log('ha data' + data);
        this.users = data;
        console.log(data);
      }, error => {
        console.log(error);
      }
    );
  }

  public validateSave(): boolean {
    // tslint:disable-next-line:triple-equals
    return this.user.ref != null && this.user.chaines.length > 0;
  }

  // tslint:disable-next-line:align typedef
  public deleteByReferenceFromView(user: User) {
    const index = this.users.findIndex(c => c.ref === user.ref);
    if (index !== -1) {
      this.users.splice(index, 1);
    }
  }

  // tslint:disable-next-line:typedef
  public deleteByRef(index: number, user: User) {
    const link = 'http://localhost:8036/user-youtube/user/ref/' + user.ref;
    console.log('linkkk ::: ' + link);
    this.http.delete<number>(link).subscribe(
      data => {
        this.users.splice(index, 1);
        console.log('ha data' + data);
      }
    );

  }

  // tslint:disable-next-line:typedef
  public addChaine() {
    this.user.chaines.push(this.cloneChaine(this.chaine));
  }


  get user(): User {
    if (this._user == null) {
      this._user = new User();
    }
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }

  get users(): Array<User> {
    if (this._users == null) {
      this._users = new Array<User>();
    }
    return this._users;
  }

  set users(value: Array<User>) {
    this._users = value;
  }

  get indice(): number {
    return this._index;
  }

  set indice(value: number) {
    this._index = value;
  }
}

