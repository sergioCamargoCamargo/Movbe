// src/app/core/services/auth.service.ts

import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { UserService } from './user.service';
import { User, updateProfile, EmailAuthProvider, reauthenticateWithCredential } from 'firebase/auth';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private afAuth: AngularFireAuth, private userService: UserService) {}

  async register(email: string, password: string, displayName: string, birthDate: Date, firstName: string, lastName: string) {
    const credential = await this.afAuth.createUserWithEmailAndPassword(email, password);
    await credential.user?.updateProfile({ displayName });
    await this.userService.createUserProfile(credential.user?.uid!, { displayName, birthDate, firstName, lastName });
    await this.sendVerificationEmail();
  }

  login(email: string, password: string) {
    return this.afAuth.signInWithEmailAndPassword(email, password);
  }

   // Método para iniciar sesión con Google
   googleSignIn(): Promise<firebase.auth.UserCredential> {
    const provider = new firebase.auth.GoogleAuthProvider();
    return this.afAuth.signInWithPopup(provider);
  }

  logout() {
    return this.afAuth.signOut();
  }

  sendVerificationEmail() {
    return this.afAuth.currentUser.then((user) => user?.sendEmailVerification());
  }

  updateUserProfile(profileData: { displayName?: string; photoURL?: string }) {
    const user = this.afAuth.currentUser;
    return user.then((u) => {
      if (u) {
        return updateProfile(u, profileData);
      } else {
        throw new Error('No hay un usuario autenticado.');
      }
    });
  }

  changePassword(currentPassword: string, newPassword: string) {
    const user = this.afAuth.currentUser;
    return user.then((u) => {
      if (u && u.email) {
        const credential = EmailAuthProvider.credential(u.email, currentPassword);
        return reauthenticateWithCredential(u, credential).then(() => {
          return u.updatePassword(newPassword);
        });
      } else {
        throw new Error('No hay un usuario autenticado.');
      }
    });
  }

  deleteUser() {
    const user = this.afAuth.currentUser;
    return user.then((u) => {
      if (u && u.email) {
        // Podrías pedir la contraseña actual al usuario para reautenticar
        // Aquí asumimos que ya ha sido reautenticado
        return u.delete();
      } else {
        throw new Error('No hay un usuario autenticado.');
      }
    });
  }

  resetPassword(email: string) {
    return this.afAuth.sendPasswordResetEmail(email);
  }

  getUser(): Observable<User | null> {
    return this.afAuth.authState as Observable<User | null>;
  }

  // // Método auxiliar para obtener el usuario actual de forma sincrónica (si es necesario)
  // async getCurrentUser(): Promise<User | null> {
  //   return this.afAuth.currentUser;
  // }
}
