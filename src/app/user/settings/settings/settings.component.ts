// src/app/user/settings/settings.component.ts

import { Component, OnInit } from '@angular/core';
import { NotificationService } from '../../../core/services/notification.service';
import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
})
export class SettingsComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {}

  changePassword(currentPassword: string, newPassword: string) {
    this.authService.changePassword(currentPassword, newPassword).then(() => {
      this.notificationService.showSuccess('Contraseña actualizada correctamente.');
    }).catch((error) => {
      this.notificationService.showError('Error al cambiar la contraseña: ' + error.message);
    });
  }

  deleteAccount() {
    if (confirm('¿Estás seguro de que deseas eliminar tu cuenta? Esta acción no se puede deshacer.')) {
      this.authService.deleteUser().then(() => {
        this.notificationService.showSuccess('Cuenta eliminada correctamente.');
      }).catch((error) => {
        this.notificationService.showError('Error al eliminar la cuenta: ' + error.message);
      });
    }
  }
}
