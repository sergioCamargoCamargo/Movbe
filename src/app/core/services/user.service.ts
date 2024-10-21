// src/app/core/services/user.service.ts

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private firestore: AngularFirestore) {}

  createUserProfile(uid: string, data: any) {
    return this.firestore.collection('users').doc(uid).set(data);
  }

  getUserProfile(uid: string) {
    return this.firestore.collection('users').doc(uid).valueChanges();
  }

  updateUserProfile(uid: string, data: any) {
    return this.firestore.collection('users').doc(uid).update(data);
  }
}
