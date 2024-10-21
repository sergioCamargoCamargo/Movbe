// src/app/home/home.component.ts

import { Component, OnInit } from '@angular/core';
import { VideoService } from '../core/services/video.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  featuredVideos: any[] = [];
  recentVideos: any[] = [];

  constructor(private videoService: VideoService) {}

  ngOnInit(): void {
    this.getFeaturedVideos();
    this.getRecentVideos();
  }

  getFeaturedVideos() {
    this.videoService.getFeaturedVideos().subscribe((videos) => {
      this.featuredVideos = videos;
    });
  }

  getRecentVideos() {
    this.videoService.getRecentVideos().subscribe((videos) => {
      this.recentVideos = videos;
    });
  }
}
