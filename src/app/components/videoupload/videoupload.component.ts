import { Component } from '@angular/core';
// import { VideoUploadService } from '';

@Component({
  selector: 'app-videoupload',
  standalone: true,
  imports: [],
  templateUrl: './videoupload.component.html',
  styleUrl: './videoupload.component.css'
})
export class VideouploadComponent {

  videoUrl: string | undefined;
  isUploading = false;

  /**
   *
   */
  // constructor() {
  //   super();
    
  // }
}
