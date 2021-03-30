import { Component, OnInit } from '@angular/core';
import {Playliste} from '../../controller/model/playliste.model';
import {CommandeService} from '../../controller/service/commande.service';

@Component({
  selector: 'app-playliste-create',
  templateUrl: './playliste-create.component.html',
  styleUrls: ['./playliste-create.component.css']

})
export class PlaylisteCreateComponent implements OnInit {

  constructor(private commandeService: CommandeService) { }
  get playliste(): Playliste {
    return this.commandeService.playliste;
  }
  // tslint:disable-next-line:typedef
  public save(){
    this.commandeService.save();
  }

  ngOnInit(): void {
  }

}
