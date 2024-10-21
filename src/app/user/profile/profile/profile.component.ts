// src/app/user/profile/profile.component.ts

import { Component, OnInit } from '@angular/core';
import { User } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  user$: Observable<User | null>;

  defaultPhoto: string = 'assets/images/default-user.png'; 
  constructor(private authService: AuthService) {
    this.user$ = this.authService.getUser();
  }

  ngOnInit(): void {}

  updateProfile(displayName: string, photoURL: string) {
    this.authService.updateUserProfile({ displayName, photoURL }).then(() => {
      // Mostrar una notificación de éxito
    }).catch((error) => {
      // Manejar errores
    });
  }
}
