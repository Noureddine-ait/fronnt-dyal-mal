import { Component, OnInit } from '@angular/core';
import {ChaineService} from '../../controller/service/chaine.service';
import {User} from '../../controller/model/user.model';
import {UserService} from '../../controller/service/user.service';
import {Chaine} from '../../controller/model/chaine.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  // tslint:disable-next-line:typedef

  // tslint:disable-next-line:typedef
  public update(index: number, user: User) {
    this.userService.update(index, user);
  }

  // tslint:disable-next-line:typedef
  public delete(index: number) {
    this.users.splice(index, 1);
  }

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.init();
  }

  get users(): Array<User> {
    return this.userService.users;
  }
}

