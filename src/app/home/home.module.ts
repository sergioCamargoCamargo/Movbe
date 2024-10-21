import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard'; // Si usas AuthGuard
import { VideoModule } from '../video/video.module';
// import { MatCardModule } from '@angular/material/card';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
];

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    VideoModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent, canActivate: [AuthGuard] },
    ]),
    SharedModule,
    // MatCardModule,
  ]
})
export class HomeModule { }
