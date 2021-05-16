import {Component, OnInit} from '@angular/core';
import {ChaineService} from '../../../controller/service/chaine.service';
import {Chaine} from '../../../controller/model/chaine.model';
import {User} from '../../../controller/model/user.model';
import {UserService} from '../../../controller/service/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  // tslint:disable-next-line:typedef
  public save() {
    this.userService.save();
  }


  // tslint:disable-next-line:typedef
  public validateSave() {
    return this.userService.validateSave();
  }

  // tslint:disable-next-line:typedef
  public addUser() {
    this.userService.addUser();
  }


  get user(): User {
    return this.userService.user;
  }

  get chaine(): Chaine {
    return this.userService.chaine;
  }


  // tslint:disable-next-line:typedef
  public addChaine() {
    this.userService.addChaine();
  }
}
