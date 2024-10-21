// src/app/auth/verify-email/verify-email.component.ts

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { NotificationService } from '../../core/services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss'],
})
export class VerifyEmailComponent implements OnInit {
  email: string | null = '';

  constructor(
    private authService: AuthService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.getUser().subscribe((user) => {
      this.email = user?.email || '';
      if (user?.emailVerified) {
        this.router.navigate(['/']);
      }
    });
  }

  sendVerificationEmail() {
    this.authService.sendVerificationEmail().then(() => {
      this.notificationService.showSuccess('Correo de verificación enviado.');
    }).catch((error) => {
      this.notificationService.showError('Error al enviar el correo de verificación: ' + error.message);
    });
  }
}


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-verify-email',
//   templateUrl: './verify-email.component.html',
//   styleUrl: './verify-email.component.scss'
// })
// export class VerifyEmailComponent {

// }
