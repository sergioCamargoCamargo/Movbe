import { Routes } from '@angular/router';
import { LoginComponent } from '../app/components/login/login.component';
import { RegisterComponent } from '../app/components/register/register.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from './auth.guard';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { UserSettingsComponent } from './components/user-settings/user-settings.component';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'video/:id', component: VideoPlayerComponent },
    { path: 'settings', component: UserSettingsComponent },
    { path: '**', redirectTo: '/home' } // Ruta para manejar URLs no encontradas
  ];
