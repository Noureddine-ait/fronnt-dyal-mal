import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {PlaylistesComponent} from './playlistes/playlistes.component';
import {PlaylisteListeComponent} from './playlistes/playliste-liste/playliste-liste.component';
import {PlaylisteCreateComponent} from './playlistes/playliste-create/playliste-create.component';
import {BrowserModule} from '@angular/platform-browser';

const routes: Routes = [
  {path: 'playlistes', children: [{path: 'playlistes/playliste-liste', component: PlaylisteListeComponent},
      {path: 'playlistes/playliste-create', component: PlaylisteCreateComponent}] }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes),
    CommonModule ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
