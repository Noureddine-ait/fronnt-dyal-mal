import { Component, OnInit } from '@angular/core';
import {ChaineService} from '../../controller/service/chaine.service';
import {Chaine} from '../../controller/model/chaine.model';
import {User} from '../../controller/model/user.model';
import {UserService} from '../../controller/service/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  public save(){
    this.userService.save();
  }
  get user(): User {
    return  this.userService.user;
  }
}
