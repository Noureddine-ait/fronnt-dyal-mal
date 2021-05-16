import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {UserCreateComponent} from './view/users/user-create/user-create.component';
import {UserListComponent} from './view/users/user-list/user-list.component';
import {PageNotFoundedComponent} from './view/page-not-founded/page-not-founded.component';
import {ChaineCreateComponent} from "./chaines/chaine-create/chaine-create.component";
import {ChaineListComponent} from './chaines/chaine-list/chaine-list.component';

export const components = [UserCreateComponent, UserListComponent, ChaineCreateComponent , ChaineListComponent ];
const routes: Routes = [
  {path: '', component: components[0]},
  {path: 'user-create', component: components[0]},
  {path: 'user-list', component: components[1]},
  {path: 'chaine-create', component: components[2]},
  {path: 'chaine-list', component: components[3]} ,
  {path: '**', component: PageNotFoundedComponent},
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
