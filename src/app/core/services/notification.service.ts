// src/app/core/services/notification.service.ts

import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'; // Usaremos Angular Material para las notificaciones

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor(private snackBar: MatSnackBar) {}

  showSuccess(message: string, action: string = 'Cerrar', duration: number = 3000) {
    this.snackBar.open(message, action, {
      duration,
      panelClass: ['snackbar-success'],
    });
  }

  showError(message: string, action: string = 'Cerrar', duration: number = 3000) {
    this.snackBar.open(message, action, {
      duration,
      panelClass: ['snackbar-error'],
    });
  }

  showWarning(message: string, action: string = 'Cerrar', duration: number = 3000) {
    this.snackBar.open(message, action, {
      duration,
      panelClass: ['snackbar-warning'],
    });
  }

  showInfo(message: string, action: string = 'Cerrar', duration: number = 3000) {
    this.snackBar.open(message, action, {
      duration,
      panelClass: ['snackbar-info'],
    });
  }
}


// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class NotificationService {

//   constructor() { }
// }
