import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsComponent } from './settings/settings/settings.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard'; // Si usas AuthGuard
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: 'profile', component: ProfileComponent },
  { path: 'settings', component: SettingsComponent },
];

@NgModule({
  declarations: [
    SettingsComponent,
    ProfileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    SharedModule,
  ]
})
export class UserModule { }
