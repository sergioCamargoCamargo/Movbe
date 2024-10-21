// src/app/core/services/contact.service.ts

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private firestore: AngularFirestore) {}

  sendMessage(data: any) {
    return this.firestore.collection('messages').add({
      ...data,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
  }
}


// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ContactService {

//   constructor() { }
// }
