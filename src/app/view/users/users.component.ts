import { Component, OnInit } from '@angular/core';
import {User} from '../../controller/model/user.model';
import {UserService} from '../../controller/service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


}
