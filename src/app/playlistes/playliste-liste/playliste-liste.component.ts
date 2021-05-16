import { Component, OnInit } from '@angular/core';
import {Playliste} from '../../controller/model/playliste.model';
import {PlayListeService} from '../../controller/service/playListe.service';

@Component({
  selector: 'app-playliste-liste',
  templateUrl: './playliste-liste.component.html',
  styleUrls: ['./playliste-liste.component.css']
})
export class PlaylisteListeComponent implements OnInit {


public update(index: number, playliste: Playliste){

  this.playlisteService.update(index, playliste );
}
  // tslint:disable-next-line:typedef
  public delete(index: number){
    this.playlistes.splice(index, 1);
  }
  constructor( private playlisteService: PlayListeService) { }
  get playlistes(): Array<Playliste> {
    return this.playlisteService.playlistes;
  }
 ngOnInit(): void {
    this.playlisteService.findAll();
  }

}
