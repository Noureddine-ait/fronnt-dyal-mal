import {Injectable} from '@angular/core';
import {Chaine} from '../model/chaine.model';
import {HttpClient} from '@angular/common/http';
import {url} from 'inspector';
import {subscribeOn} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChaineService {
  private _urlBase = 'http://localhost:8036';
  private _url = '/chaine-youtube/chaine';
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
      const myChaine = this.cloneChaine(this.chaine);
      console.log('myy user ' + myChaine);
      this.http.post(this._urlBase + this._url + '/', this.chaine).subscribe(
        data => {
          if (data > 0) {
            console.log(this.chaine);
            this.chaines.push(myChaine);
          } else {
            alert('echec !!' + data);
          }
        }
      );
      this.chaine = null;
    }

  }

  constructor(private http: HttpClient) {
  }

// tslint:disable-next-line:typedef
  public findAll() {
    this.http.get<Array<Chaine>>(this._urlBase + this._url + '/').subscribe(
      data => {
        this.chaines = data;
      }, error => {
        console.log(error);
      }
    );

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
  private clone(chaine: Chaine) {
    const myClone = new Chaine();
    myClone.id = chaine.id;
    myClone.ref = chaine.ref;
    myClone.titre = chaine.titre;
    myClone.nombreAbonnee = chaine.nombreAbonnee;

    return myClone;

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

}
