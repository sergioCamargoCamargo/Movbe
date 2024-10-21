// src/app/app-routing.module.ts

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Importación del guardia de autenticación
import { AuthGuard } from './core/guards/auth.guard';


import { HomeComponent } from './home/home.component'; // Importa HomeComponent

const routes: Routes = [
  // Ruta por defecto: redirige a '/login'
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  // Rutas de autenticación
  {
    path: '',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },

  // Rutas protegidas por AuthGuard
  {
    path: '',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
      },
      {
        path: 'user',
        loadChildren: () => import('./user/user.module').then((m) => m.UserModule),
      },
      // Cargar el VideoModule con Lazy Loading
      {
        path: 'video',
        loadChildren: () => import('./video/video.module').then((m) => m.VideoModule),
      },
    ],
  },

  // Ruta para el módulo de contacto (pública)
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then((m) => m.ContactModule),
  },

  // Ruta comodín para manejar rutas no encontradas
  {
    path: '**',
    redirectTo: '/login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}






