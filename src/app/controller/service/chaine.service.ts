import {Injectable} from '@angular/core';
import {Chaine} from '../model/chaine.model';

@Injectable({
  providedIn: 'root'
})
export class ChaineService {
  private _chaine: Chaine;
  private _chaines: Array<Chaine>;
  private _indice: number;

  // tslint:disable-next-line:typedef
  public update(index: number, chaine: Chaine) {
    this.chaine = this.clone(chaine);
    this._indice = index;
  }

  // tslint:disable-next-line:typedef
  public save() {
    if (this.chaine.id == null) {
      this.chaine.id = this.chaines.length + 1;
      this.chaines.push(this.clone(this.chaine));
    } else {
      this.chaines[this._indice] = this.clone(this.chaine);
    }
    this.chaine = null;
  }

  constructor() {
  }

// tslint:disable-next-line:typedef
  public init() {
    // tslint:disable-next-line:variable-name
    for (let _i = 1; _i < 5; _i++) {

      const myChaine = new Chaine();
      myChaine.id = _i;
      myChaine.ref = 'c-' + _i;
      myChaine.titre = 'chaine11' + _i;
      myChaine.descreption = 'gaming' + _i;
      myChaine.nombreAbonnee = 5000 + _i;
      myChaine.login = 'gamer163 ' + _i;
      myChaine.password = '123456f' + _i;

      this.chaines.push(myChaine);
    }
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


  get chaines(): Array<Chaine> {

    if (this._chaines == null) {
      this._chaines = new Array<Chaine>();
    }

    return this._chaines;
  }

  set chaines(value: Array<Chaine>) {
    this._chaines = value;
  }

  // tslint:disable-next-line:typedef
  private clone(chaine: Chaine) {
    const myClone = new Chaine();
    myClone.id = chaine.id;
    myClone.ref = chaine.ref;
    myClone.titre = chaine.titre;
    myClone.descreption = chaine.descreption;
    myClone.nombreAbonnee = chaine.nombreAbonnee;
    myClone.login = chaine.login;
    myClone.password = chaine.password;
    /*myClone.user =  chaine.user;*/

    return myClone;

  }


}
