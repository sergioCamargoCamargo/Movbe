// src/app/auth/register/register.component.ts

import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { NotificationService } from '../../core/services/notification.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent {
  firstName = '';
  lastName = '';
  username = '';
  email = '';
  password = '';
  confirmPassword = '';
  displayName = '';
  birthDate!: Date;
  isAdultConfirmed = false;

  constructor(
    private authService: AuthService,
    private notificationService: NotificationService,
    private router: Router
  ) {}

  register() {
    if (this.password !== this.confirmPassword) {
      this.notificationService.showError('Las contraseñas no coinciden.');
      return;
    }
    if (!this.isAdultConfirmed) {
      this.notificationService.showError('Debes confirmar que eres mayor de edad.');
      return;
    }
    // Puedes agregar una validación para verificar que el usuario es mayor de edad según la fecha de nacimiento
    const age = this.calculateAge(this.birthDate);
    if (age < 18) {
      this.notificationService.showError('Debes ser mayor de 18 años para registrarte.');
      return;
    }
    this.authService
      .register(this.email, this.password, this.username, this.birthDate, this.firstName, this.lastName)
      .then(() => {
        this.notificationService.showSuccess('Registro exitoso. Por favor, verifica tu correo electrónico.');
        this.router.navigate(['/verify-email']);
      })
      .catch((error) => {
        this.notificationService.showError('Error al registrarse: ' + error.message);
      });
  }

  calculateAge(birthDate: Date): number {
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDifference = today.getMonth() - birth.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    return age;
  }
}


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-register',
//   templateUrl: './register.component.html',
//   styleUrl: './register.component.scss'
// })
// export class RegisterComponent {

// }
