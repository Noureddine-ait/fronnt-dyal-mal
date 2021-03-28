import { Component, OnInit } from '@angular/core';
import {Video} from '../../controller/model/video.model';
import {VideoService} from '../../controller/service/video.service';

@Component({
  selector: 'app-video-create',
  templateUrl: './video-create.component.html',
  styleUrls: ['./video-create.component.css']
})
export class VideoCreateComponent implements OnInit {

  constructor(private videoService: VideoService) { }
  public save(){
    this.videoService.save();
  }

  ngOnInit(): void {
  }
get video(): Video {
return this.videoService.video;
}
}
