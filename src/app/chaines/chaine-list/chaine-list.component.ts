import {Component, OnInit} from '@angular/core';
import {Chaine} from '../../controller/model/chaine.model';
import {ChaineService} from '../../controller/service/chaine.service';

@Component({
  selector: 'app-chaine-list',
  templateUrl: './chaine-list.component.html',
  styleUrls: ['./chaine-list.component.css']
})
export class ChaineListComponent implements OnInit {


  public update(index: number, chaine: Chaine) {
    this.chaineService.update(index,chaine);
  }

  public delete(index: number) {
    this.chaines.splice(index, 1);
  }

  constructor(private chaineService: ChaineService) {
  }

  ngOnInit(): void {
    this.chaineService.init();
  }

  get chaines(): Array<Chaine> {
    return this.chaineService.chaines;
  }
}
