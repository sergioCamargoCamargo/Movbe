import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoUploadComponent } from './video-upload/video-upload.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { VideoListComponent } from './video-list/video-list.component';
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: 'upload', component: VideoUploadComponent },
  { path: 'list', component: VideoListComponent },
  { path: 'player/:id', component: VideoPlayerComponent },
];

@NgModule({
  declarations: [
    VideoUploadComponent,
    VideoPlayerComponent,
    VideoListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    SharedModule
  ],
  exports: [
    VideoListComponent, // Exportamos el VideoListComponent
  ],
})
export class VideoModule { }
