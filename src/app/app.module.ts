import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VideosComponent } from './videos/videos.component';
import { VideoCreateComponent } from './videos/video-create/video-create.component';
import { VideoListeComponent } from './videos/video-liste/video-liste.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    VideosComponent,
    VideoCreateComponent,
    VideoListeComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule
    ],
  providers: [],
  bootstrap: [VideosComponent]
})
export class AppModule { }
