// src/app/auth/login/login.component.ts

import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { Router, ActivatedRoute  } from '@angular/router';
import { NotificationService } from '../../core/services/notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email = '';
  password = '';
  returnUrl: string = '/home';

  constructor(
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute,
    private notificationService: NotificationService
  ) {
    // Obtener el parámetro returnUrl si existe
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/home';
  }

  login() {
    this.authService
      .login(this.email, this.password)
      .then((userCredential) => {
        // Si no deseas verificar el correo electrónico, puedes comentar esta parte
        if (userCredential.user?.emailVerified) {
          this.notificationService.showSuccess('Inicio de sesión exitoso.');
          this.router.navigate([this.returnUrl]); // Navegar al home
        } else {
          this.notificationService.showWarning('Por favor, verifica tu correo electrónico.');
          this.router.navigate(['/auth/verify-email']); // Navega a la página de verificación de correo
        }
      })
      .catch((error) => {
        this.notificationService.showError('Error al iniciar sesión: ' + error.message);
      });
  }

  loginWithGoogle() {
    this.authService
      .googleSignIn()
      .then(() => {
        this.notificationService.showSuccess('Has iniciado sesión con Google.');
        this.router.navigate([this.returnUrl]); // Navegar al home
      })
      .catch((error) => {
        this.notificationService.showError('Error al iniciar sesión con Google: ' + error.message);
      });
  }
}



// // src/app/auth/login/login.component.ts

// import { Component } from '@angular/core';
// import { AuthService } from '../../core/services/auth.service';
// import { Router } from '@angular/router';
// import { NotificationService } from '../../core/services/notification.service';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
//   styleUrls: ['./login.component.scss'],
// })
// export class LoginComponent {
//   email = '';
//   password = '';

//   constructor(
//     private authService: AuthService,
//     private router: Router,
//     private notificationService: NotificationService
//   ) {}

//   login() {
//     this.authService
//       .login(this.email, this.password)
//       .then(() => {
//         this.router.navigate(['/']);
//       })
//       .catch((error) => {
//         this.notificationService.showError(error.message);
//       });
//   }
// }


// // import { Component } from '@angular/core';

// // @Component({
// //   selector: 'app-login',
// //   templateUrl: './login.component.html',
// //   styleUrl: './login.component.scss'
// // })
// // export class LoginComponent {

// // }
