import { Component, OnInit } from '@angular/core';
import {Video} from '../../controller/model/video.model';
import {VideoService} from '../../controller/service/video.service';

@Component({
  selector: 'app-video-liste',
  templateUrl: './video-liste.component.html',
  styleUrls: ['./video-liste.component.css']
})
export class VideoListeComponent implements OnInit {

  constructor(private videoService: VideoService) { }

  ngOnInit(): void {
    this.videoService.findAll();
  }
  // tslint:disable-next-line:typedef
  public delete(index: number){
    this.videos.splice(index, 1 );
  }
  // tslint:disable-next-line:typedef
  public update(index: number, v: Video ){
    this.videoService.update(index, v );
  }
  get videos(): Array<Video> {
    return this.videoService.videos;
  }

}
