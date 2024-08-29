import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { environment } from '../src/environments/environment';

bootstrapApplication(AppComponent, {
  providers: [
      provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
      provideAuth(() => getAuth()),
      provideFirestore(() => getFirestore()),
      provideStorage(() => getStorage())
  ]
});


// import { bootstrapApplication } from '@angular/platform-browser';
// //import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';
// import { importProvidersFrom } from '@angular/core';
// import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
// import { provideAuth, getAuth } from '@angular/fire/auth';
// import { provideFirestore, getFirestore } from '@angular/fire/firestore';
// import { provideStorage, getStorage } from '@angular/fire/storage';
// import { environment } from '../src/environments/environment';


// bootstrapApplication(AppComponent, {
//   providers: [
//     importProvidersFrom(
//       provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
//       provideAuth(() => getAuth()),
//       provideFirestore(() => getFirestore()),
//       provideStorage(() => getStorage())
//     )
//   ]
// }).catch((err) => console.error(err));

// //bootstrapApplication(AppComponent, appConfig).catch((err) => console.error(err));
