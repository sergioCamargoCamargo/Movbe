// src/app/core/services/video.service.ts

import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';
import firebase from 'firebase/compat/app';
import { Observable, of } from 'rxjs';
import { finalize } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class VideoService {
  constructor(private firestore: AngularFirestore, private storage: AngularFireStorage) {}

  getFeaturedVideos(): Observable<any[]> {
    // Aquí debes implementar la lógica para obtener los videos destacados
    // Por ahora, puedes usar datos de ejemplo
    const featuredVideos = [
      {
        title: 'Video Destacado 1',
        thumbnail: '/assets/thumbnails/video1.jpg',
      },
      {
        title: 'Video Destacado 2',
        thumbnail: '/assets/thumbnails/video2.jpg',
      },
      // Más videos...
    ];
    return of(featuredVideos);
  }

  getRecentVideos(): Observable<any[]> {
    // Implementa la lógica para obtener los videos recientes
    const recentVideos = [
      {
        title: 'Video Reciente 1',
        thumbnail: '/assets/thumbnails/video3.jpg',
      },
      {
        title: 'Video Reciente 2',
        thumbnail: '/assets/thumbnails/video4.jpg',
      },
      // Más videos...
    ];
    return of(recentVideos);
  }

  getVideos(): Observable<any[]> {
    return this.firestore.collection('videos').valueChanges({ idField: 'id' });
  }

  getVideoById(id: string): Observable<any> {
    return this.firestore.collection('videos').doc(id).valueChanges();
  }

  uploadVideo(file: File, metadata: any): Observable<number | undefined> {
    const filePath = `videos/${Date.now()}_${file.name}`;
    const fileRef = this.storage.ref(filePath);
    const task = this.storage.upload(filePath, file);

    return task.percentageChanges().pipe(
      finalize(async () => {
        const downloadURL = await fileRef.getDownloadURL().toPromise();
        await this.firestore.collection('videos').add({
          ...metadata,
          url: downloadURL,
          createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });
      })
    );
  }
}
