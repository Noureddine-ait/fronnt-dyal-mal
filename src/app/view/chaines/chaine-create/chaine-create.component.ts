import { Component, OnInit } from '@angular/core';
import {Chaine} from '../../controller/model/chaine.model';
import {ChaineService} from '../../controller/service/chaine.service';

@Component({
  selector: 'app-chaine-create',
  templateUrl: './chaine-create.component.html',
  styleUrls: ['./chaine-create.component.css']
})
export class ChaineCreateComponent implements OnInit {

  constructor(private chaineService: ChaineService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  public save(){
    this.chaineService.save();
    }
    get chaine(): Chaine {
      return  this.chaineService.chaine;
  }

}
