import { Component, OnInit } from '@angular/core';
import {Playliste} from '../../controller/model/playliste.model';
import {CommandeService} from '../../controller/service/commande.service';

@Component({
  selector: 'app-playliste-liste',
  templateUrl: './playliste-liste.component.html',
  styleUrls: ['./playliste-liste.component.css']
})
export class PlaylisteListeComponent implements OnInit {


public update(index: number, playliste: Playliste){

  this.commandeService.update(index,playliste);
}
  // tslint:disable-next-line:typedef
  public delete(index: number){
    this.playlistes.splice(index, 1);
  }
  constructor( private commandeService: CommandeService) { }
  get playlistes(): Array<Playliste> {
    return this.commandeService.playlistes;
  }
 ngOnInit(): void {
    this.commandeService.init();
  }

}
