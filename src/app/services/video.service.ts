import { Injectable } from '@angular/core';
import { Firestore, collection, collectionData, doc, docData, setDoc, deleteDoc } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage'; // Para manejar el almacenamiento de videos
import { Observable } from 'rxjs';
import { addDoc } from '@firebase/firestore';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor() {}

  // // Obtener todos los videos de la colección 'videos'
  // getAllVideos(): Observable<any[]> {
  //   const videoCollection = collection(this.firestore, 'videos'); // Obtener referencia a la colección
  //   return collectionData(videoCollection, { idField: 'id' }) as Observable<any[]>;
  // }

  // // Obtener un video específico por su ID
  // getVideoById(id: string): Observable<any> {
  //   const videoDoc = doc(this.firestore, `videos/${id}`); // Obtener referencia al documento por ID
  //   return docData(videoDoc, { idField: 'id' }) as Observable<any>;
  // }

  // // Agregar un nuevo video a la colección 'videos'
  // async addVideo(videoData: any): Promise<void> {
  //   try {
  //     const videoCollection = collection(this.firestore, 'videos');
  //     await addDoc(videoCollection, videoData); // Agregar un nuevo documento a la colección
  //   } catch (error) {
  //     console.error('Error al agregar el video:', error);
  //     throw error;
  //   }
  // }

  // // Eliminar un video por su ID
  // async deleteVideo(videoId: string, videoFilePath: string): Promise<void> {
  //   try {
  //     const videoDoc = doc(this.firestore, `videos/${videoId}`);
  //     await deleteDoc(videoDoc); // Eliminar el documento de Firestore

  //     // Eliminar también el archivo de Firebase Storage
  //     const fileRef = this.storage.ref(videoFilePath);
  //     await fileRef.delete().toPromise();
  //   } catch (error) {
  //     console.error('Error al eliminar el video:', error);
  //     throw error;
  //   }
  // }
}
