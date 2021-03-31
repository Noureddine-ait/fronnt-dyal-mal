import {Injectable} from '@angular/core';
import {Chaine} from '../model/chaine.model';
import {HttpClient} from '@angular/common/http';
import {url} from 'inspector';
import {subscribeOn} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChaineService {
  private urlBase = 'http://localhost:8036';
  private url = '/chaine-youtube/';
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
      // this.chaine.id = this.chaines.length + 1;
      this.http.post(this.urlBase + this.url + '/', this.chaine).subscribe(
        data => {
          if (data > 0){
            console.log(this.chaine);
            const myClone = this.clone(this.chaine);
            console.log(myClone);
            // this.chaines.push(myClone);
            this.findAll();
          }else {
            alert('erreur lors de la creation de la chaine code :' + data);
          }
        }

      );

    } else {
      this.chaines[this._indice] = this.clone(this.chaine);
    }
    this.chaine = null;
  }

  constructor(private http: HttpClient) {
  }

// tslint:disable-next-line:typedef
  public findAll() {
this.http.get<Array<Chaine>>(this.urlBase + this.url + '/').subscribe(
  data => {
    this.chaines = data ;
  }, error => {
    console.log(error);
  }
);

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
