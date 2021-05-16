import {Component, OnInit} from '@angular/core';
import {ChaineService} from '../../../controller/service/chaine.service';
import {User} from '../../../controller/model/user.model';
import {UserService} from '../../../controller/service/user.service';
import {Chaine} from '../../../controller/model/chaine.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.userService.findAll();
  }

  get user(): User {
    return this.userService.user;
  }

  get users(): Array<User> {
    return this.userService.users;
  }

  // tslint:disable-next-line:adjacent-overload-signatures
  public update(index: number, user: User) {

    this.userService.update(index, user);
  }

  // tslint:disable-next-line:adjacent-overload-signatures
  public delete(index: number, user: User) {
    this.userService.deleteByRef(index, user);
  }

  // tslint:disable-next-line:typedef
  public deleteByRef(user: User, i: number) {
    this.userService.deleteByRef(i, user);
  }

  // tslint:disable-next-line:typedef
  public findChaineByUserReference(user: User) {
    this.userService.findChaineByUserReference(user);

  }


}

