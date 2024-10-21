// src/app/video/video-upload/video-upload.component.ts

import { Component } from '@angular/core';
import { VideoService } from '../../core/services/video.service';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'app-video-upload',
  templateUrl: './video-upload.component.html',
  styleUrls: ['./video-upload.component.scss'],
})
export class VideoUploadComponent {
  title = '';
  description = '';
  selectedFile: File | null = null;
  uploadProgress = 0;

  constructor(private videoService: VideoService, private notificationService: NotificationService) {}

  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    if (file && this.validateFile(file)) {
      this.selectedFile = file;
    } else {
      this.notificationService.showError('Archivo no válido. Seleccione un video de menos de 20 minutos.');
    }
  }

  validateFile(file: File): boolean {
    // Validar duración y formato del video
    // Implementar lógica de validación aquí
    return true;
  }

  uploadVideo() {
    if (this.selectedFile) {
      const metadata = {
        title: this.title,
        description: this.description,
        // Agregar más metadatos si es necesario
      };
      this.videoService.uploadVideo(this.selectedFile, metadata).subscribe(
        (progress) => {
          this.uploadProgress = progress || 0;
        },
        (error) => {
          this.notificationService.showError(error.message);
        },
        () => {
          this.notificationService.showSuccess('Video subido exitosamente.');
        }
      );
    } else {
      this.notificationService.showError('Por favor, seleccione un archivo de video.');
    }
  }
}


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-video-upload',
//   templateUrl: './video-upload.component.html',
//   styleUrl: './video-upload.component.scss'
// })
// export class VideoUploadComponent {

// }
