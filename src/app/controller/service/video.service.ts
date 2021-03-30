import {Injectable} from '@angular/core';
import {Video} from '../model/video.model';

@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private _video: Video;
  private _videos: Array<Video>;
  private index: number;
  public save() {
     if (this.video.id == null){
      this.video.id = this.videos.length + 1;
      this.videos.push(this.cloneVideo(this.video));
    }else {
      this.videos[this.index] = this.cloneVideo(this.video);
    }
     this.video = null;
  }
  public update(index: number, v: Video){
    this.video = this.cloneVideo(v);
    this.index = index;
  }

  constructor() {
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
for (let _i = 1; _i <= 3; _i++){
const myVideo = new Video();
myVideo.id = _i;
myVideo.ref = 'ref-' + _i;
myVideo.titre = 'title-' + _i;
myVideo.description = 'desc_' + _i;
myVideo.tags = 'tag-' + _i;
myVideo.dateUpload = '2' + _i + '/03/2021';
this.videos.push(myVideo);
}
  }
  private cloneVideo(video: Video) {
    const myClone = new Video();
    myClone.ref = video.ref;
 /*   myClone.path = video.path;
    myClone.url = video.url;*/
   // myClone.totalVue = video.totalVue;
    myClone.description = video.description;
   /* myClone.dislikes = video.dislikes;
    myClone.likes = video.likes;*/
    myClone.dateUpload = video.dateUpload;
    myClone.tags = video.tags;
    myClone.titre = video.titre;
    return myClone;
  }
}
