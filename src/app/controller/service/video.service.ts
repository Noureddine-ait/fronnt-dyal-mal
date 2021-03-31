import {Injectable} from '@angular/core';
import {Video} from '../model/video.model';
import {Playliste} from '../model/playliste.model';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private _video: Video;
  private _videos: Array<Video>;
  private _playListe: Playliste;
  private _urlBase = 'http://localhost:8036';
  private _url = '/gestion-video/video';
  private index: number;
  public save() {
     if (this.video.id == null){
      this.http.post(this.urlBase + this.url + '/', this.video ).subscribe(
        data => {
          if (data > 1){
          this.videos.push(this.cloneVideo(this.video)); }else {
            alert('error accrues during the creation ' + data);
          }
        }
      );

    }else {
      this.videos[this.index] = this.cloneVideo(this.video);
    }
     this.video = null;
  }
  public update(index: number, v: Video){
    this.video = this.cloneVideo(v);
    this.index = index;
  }

  constructor(private http: HttpClient ) {
  }

  get urlBase(): string {
    return this._urlBase;
  }

  set urlBase(value: string) {
    this._urlBase = value;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

  get playListe(): Playliste {
    return this._playListe;
  }

  set playListe(value: Playliste) {
    this._playListe = value;
  }

  get video(): Video {
    if (this._video == null) {
      this._video = new Video();
    }
    return this._video;
  }

  set video(value: Video) {
    this._video = value;
  }

  get videos(): Array<Video> {
    if (this._videos == null) {
      this._videos = new Array<Video>();
    }
    return this._videos;
  }

  set videos(value: Array<Video>) {
    this._videos = value;
  }
  public init(){
this.http.get<Array<Video>>('http://localhost:8036/gestion-video/video/').subscribe(
   data => {
      this.videos = data;
  }, error  => {
     console.log(error);
  }
);
  }
  private cloneVideo(video: Video) {
    const myClone = new Video();
    myClone.ref = video.ref;
    myClone.path = video.path;
    myClone.url = video.url;
    myClone.totalVue = video.totalVue;
    myClone.description = video.description;
    myClone.dislikes = video.dislikes;
    myClone.likes = video.likes;
    myClone.dateUpload = video.dateUpload;
    myClone.tags = video.tags;
    myClone.titre = video.titre;
    return myClone;
  }
}
