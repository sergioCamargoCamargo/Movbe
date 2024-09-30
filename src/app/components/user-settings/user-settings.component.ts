import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AuthService } from '../../services/auth.service';
import { VideoService } from '../../services/video.service';
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-user-settings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-settings.component.html',
  styleUrl: './user-settings.component.css'
})
export class UserSettingsComponent implements OnInit {

  user: any = null;
  videos: any[] = [];
  newProfilePicture: File | null = null;

constructor(
  private authService: AuthService,
  private videoService: VideoService,
  private storageService: StorageService) {}

  ngOnInit(): void {
    this.user = this.authService.getCurrentUser();
    this.loadUserVideos();
  }

  loadUserVideos(): void {
    // this.videoService.getAllVideos().subscribe((videos) => {
    //   this.videos = videos.filter(v => v.userId === this.user?.uid);
    // });
  }

  onProfilePictureSelected(event: any): void {
    this.newProfilePicture = event.target.files[0];
  }

  uploadProfilePicture(): void {
    if (this.newProfilePicture) {
      this.storageService.uploadProfilePicture(this.newProfilePicture, this.user.uid).then((url) => {
        // Actualizar foto de perfil del usuario
      });
    }
  }

  deleteVideo(videoId: string, videoFilePath: string): void {
    // this.videoService.deleteVideo(videoId, videoFilePath).then(() => {
    //   console.log(`Video con ID ${videoId} eliminado`);
    //   this.loadUserVideos(); // Actualiza la lista de videos después de eliminar
    // }).catch(error => {
    //   console.error('Error al eliminar el video:', error);
    // });
  }
  
}
