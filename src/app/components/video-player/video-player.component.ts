import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../../services/video.service';

@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.css'
})
export class VideoPlayerComponent implements OnInit {

  video: any = null;

  constructor(private route: ActivatedRoute,
    private videoService: VideoService) { }

  ngOnInit(): void {
    // const videoId = this.route.snapshot.paramMap.get('id');
    // if (videoId) {
    //   this.videoService.getVideoById(videoId).subscribe((video) => {
    //     this.video = video;
    //   });
    // }
  }
}
