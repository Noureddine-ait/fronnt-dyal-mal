import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {FormsModule} from '@angular/forms';
import {AppRoutingModule, components} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {MenuComponent} from './view/menu/menu.component';
import {PageNotFoundedComponent} from './view/page-not-founded/page-not-founded.component';

@NgModule({
  declarations: [
    AppComponent,
    components,
    MenuComponent,
    PageNotFoundedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
