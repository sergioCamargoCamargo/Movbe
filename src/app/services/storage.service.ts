import { Injectable } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: AngularFireStorage) {}

  // Subir un video a Firebase Storage
  uploadVideo(file: File, videoId: string): Promise<string> {
    const filePath = `videos/${videoId}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    return new Promise((resolve, reject) => {
      task.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            resolve(url); // Retorna la URL de descarga
          }, error => reject(error));
        })
      ).subscribe();
    });
  }

  uploadProfilePicture(file: File, userId: string): Promise<string> {
    const filePath = `profilePictures/${userId}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);
  
    return new Promise((resolve, reject) => {
      task.snapshotChanges().pipe(
        finalize(() => {
          fileRef.getDownloadURL().subscribe(url => {
            resolve(url); // Retorna la URL de descarga
          }, error => reject(error));
        })
      ).subscribe();
    });
  }
  
}
