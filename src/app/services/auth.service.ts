// import { Injectable } from '@angular/core';
// import { AngularFireAuth } from '@angular/fire/compat/auth';
// import { Router } from '@angular/router';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { Auth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider } from '@angular/fire/auth';
// import { signInWithPopup, User } from 'firebase/auth';

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, signInWithPopup, GoogleAuthProvider, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, User } from '@angular/fire/auth';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userSubject: BehaviorSubject<User | null> = new BehaviorSubject<User | null>(null);
  public user$: Observable<User | null> = this.userSubject.asObservable();

  constructor(private auth: Auth, private router: Router) {
    this.auth.onAuthStateChanged(user => {
      this.userSubject.next(user);
    });
  }


  // Registro con email y contraseña
  async register(email: string, password: string): Promise<void> {
    try {
      await createUserWithEmailAndPassword(this.auth, email, password);
      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Error en el registro:', error);
      // Aquí puedes manejar el error, mostrar mensajes al usuario, etc.
    }
  }

   // Inicio de sesión con email y contraseña
   async login(email: string, password: string): Promise<void> {
    try {
      await signInWithEmailAndPassword(this.auth, email, password);
      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Error en el inicio de sesión:', error);
      // Manejar errores
    }
  }

   // Inicio de sesión con Google
   async loginWithGoogle(): Promise<void> {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(this.auth, provider);
      this.router.navigate(['/home']);
    } catch (error) {
      console.error('Error en el inicio de sesión con Google:', error);
      // Manejar errores
    }
  }

  // Cierre de sesión
  async logout(): Promise<void> {
    try {
      await signOut(this.auth);
      this.router.navigate(['/login']);
    } catch (error) {
      console.error('Error en el cierre de sesión:', error);
      // Manejar errores
    }
  }

  // Obtener el usuario actual
  getCurrentUser(): User | null {
    return this.userSubject.value;
  }

}
