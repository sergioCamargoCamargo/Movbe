import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { routes } from './app/app.routes';
import { environment } from './environments/environment';

// Importar los módulos de Firebase
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';
import { provideStorage, getStorage } from '@angular/fire/storage';
import { provideHttpClient } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // Proveedores de rutas
    provideHttpClient(),   // Proveedores de HttpClient
    // Inicializar Firebase con la configuración global de `environment.firebaseConfig`
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()), // Proveer Auth de Firebase
    provideFirestore(() => getFirestore()), // Proveer Firestore
    provideStorage(() => getStorage()) // Proveer Storage
  ]
}).catch(err => console.error(err));
