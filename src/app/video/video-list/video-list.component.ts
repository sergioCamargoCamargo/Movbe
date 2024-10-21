import { Component, OnInit } from '@angular/core';
import { VideoService } from '../../core/services/video.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrl: './video-list.component.scss'
})
export class VideoListComponent implements OnInit {

  videos: any[] = [];

  constructor(private videoService: VideoService, private router: Router) {
   
    
  }

  ngOnInit(): void {
    this.loadVideos();
  }

  loadVideos() {
    this.videoService.getVideos().subscribe((data) => {
      this.videos = data;
    });
  }

  playVideo(videoId: string) {
    // Navega al VideoPlayerComponent con el ID del video
    this.router.navigate(['/video/player', videoId]);
  }

}
