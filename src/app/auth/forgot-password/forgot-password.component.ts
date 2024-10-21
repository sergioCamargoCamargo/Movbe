// src/app/auth/forgot-password/forgot-password.component.ts

import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
})
export class ForgotPasswordComponent {
  email = '';

  constructor(
    private authService: AuthService,
    private notificationService: NotificationService
  ) {}

  resetPassword() {
    if (!this.email) {
      this.notificationService.showError('Por favor, introduce tu correo electrónico.');
      return;
    }

    this.authService.resetPassword(this.email)
      .then(() => {
        this.notificationService.showSuccess('Se ha enviado un correo para restablecer tu contraseña.');
      })
      .catch((error) => {
        this.notificationService.showError('Error al restablecer la contraseña: ' + error.message);
      });
  }
}
