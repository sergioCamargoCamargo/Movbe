import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AuthService } from '../services/auth.service';
import { VideoService } from '../services/video.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private videoService: VideoService, private authService: AuthService, private router: Router){}

  videos: any[] = [];

  ngOnInit(): void {
    // this.videoService.getAllVideos().subscribe((videos) => {
    //   this.videos = videos;
    // });
  }

  playVideo(id: string): void {
    this.router.navigate(['/video', id]);
  }

  async logout() {
    await this.authService.logout();
    this.router.navigate(['/login']);
  }

}
