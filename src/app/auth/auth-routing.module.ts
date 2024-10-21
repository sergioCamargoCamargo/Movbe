// src/app/auth/auth-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email', component: VerifyEmailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}


// // src/app/auth/auth-routing.module.ts

// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
// import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
// import { VerifyEmailComponent } from './verify-email/verify-email.component';

// const routes: Routes = [
//   // Cuando se accede a '/auth', redirige a '/auth/login'
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
//   // Rutas de autenticación
//   { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },
//   { path: 'forgot-password', component: ForgotPasswordComponent },
//   { path: 'verify-email', component: VerifyEmailComponent },
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
// })
// export class AuthRoutingModule {}


// src/app/auth/auth-routing.module.ts

// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
// import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
// import { VerifyEmailComponent } from './verify-email/verify-email.component';

// const routes: Routes = [
//   { path: 'login', component: LoginComponent },
//   { path: 'register', component: RegisterComponent },
//   { path: 'forgot-password', component: ForgotPasswordComponent },
//   { path: 'verify-email', component: VerifyEmailComponent },
// ];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
// })
// export class AuthRoutingModule {}


// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';



// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
// export class AuthRoutingModule { }
