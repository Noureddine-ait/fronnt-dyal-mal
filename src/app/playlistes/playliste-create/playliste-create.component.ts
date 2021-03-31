import { Component, OnInit } from '@angular/core';
import {Playliste} from '../../controller/model/playliste.model';
import {PlayListeService} from '../../controller/service/playListe.service';

@Component({
  selector: 'app-playliste-create',
  templateUrl: './playliste-create.component.html',
  styleUrls: ['./playliste-create.component.css']

})
export class PlaylisteCreateComponent implements OnInit {

  constructor(private playListeService: PlayListeService) { }
  get playliste(): Playliste {
    return this.playListeService.playliste;
  }
  // tslint:disable-next-line:typedef
  public save(){
    this.playListeService.save();
  }

  ngOnInit(): void {
  }

}
