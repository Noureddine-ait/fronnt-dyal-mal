import { Injectable } from '@angular/core';
import {Playliste} from '../model/playliste.model';

@Injectable({
  providedIn: 'root'
})
export class PlayListeService {
private _playliste: Playliste;
private _playlistes: Array<Playliste>;
  private _index: number;
// tslint:disable-next-line:typedef
public save(){
  if  (this.playliste.id == null){
  this.playliste.id = this.playlistes.length + 1;
  this.playlistes.push(this.clone(this.playliste));}
  else {
    this.playlistes[this._index] = this.clone(this.playliste) ;
  }
  this.playliste = null;
}

  constructor() { }

  public update(index: number, playliste: Playliste){
  this.playliste = this.clone(playliste) ;
  this._index = index;
  }
  public init(){
  for (let  _i = 0; _i < 4; _i++) {
    const myPlayliste = new Playliste();
    myPlayliste.id = _i;
    myPlayliste.ref = 'c-' + _i;
    myPlayliste.titre = 'haha';
    this.playlistes.push(myPlayliste);
 }}


get playlistes(): Array<Playliste> {
    if (this._playlistes == null){ this._playlistes = new Array<Playliste>(); }
    return this._playlistes;
  }


  private clone(playliste: Playliste) {
    const  myClone = new Playliste();
    myClone.id = playliste.id;
    myClone.ref = playliste.ref;
    myClone.titre = playliste.titre;
    myClone.description = playliste.description;

    return myClone;
  }
  set playlistes(value: Array<Playliste>) {
    this._playlistes = value;
  }

  get playliste(): Playliste {
    if ( this._playliste == null){this._playliste = new Playliste(); }
    return this._playliste;
  }

  set playliste(value: Playliste) {
    this._playliste = value;
  }
}
