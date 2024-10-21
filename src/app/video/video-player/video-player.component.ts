import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VideoService } from '../../core/services/video.service';
import { AuthService } from '../../core/services/auth.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import firebase from 'firebase/compat/app';
import { map, Observable, of } from 'rxjs';

@Component({
  selector: 'app-video-player',
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.scss'
})
export class VideoPlayerComponent implements OnInit{

  video: any;
  userId: any;
  comments: any[] = [];
  newComment: string = "";

  constructor(private route: ActivatedRoute, 
              private videoService: VideoService,
              private authService: AuthService,
              private firestore: AngularFirestore) {
                
              }

  ngOnInit(): void {
    const videoId = this.route.snapshot.paramMap.get('id');

     // Asegúrate de que `videoId` no sea null o undefined
  if (!videoId) {
    console.log('Error: No se encontró el videoId en la URL');
    return; // Evita continuar si no hay videoId
  }

  // Obtener el userId del usuario autenticado
  this.authService.getUser().subscribe(user => {
    if (user) {
      this.userId = user.uid;
      // Cargar los datos del video y comentarios solo si userId está disponible
      this.loadVideo(videoId);
      this.loadComments(videoId);
    } else {
      console.log('Error: No se encontró el usuario autenticado', user);
    }
  });
  //   // Obtener el userId del usuario autenticado
  // this.authService.getUser().subscribe(user => {
  //   if (user) {
  //     this.userId = user.uid;  // Almacena el ID del usuario autenticado
  //   }
  // });

  //   this.loadVideo(videoId);
  //   this.loadComments(videoId);
  }

  loadVideo(id: string | null) {
    if (id) {
      this.videoService.getVideoById(id).subscribe((data) => {
        this.video = data;
      });
    }
  }

  loadComments(videoId: string | null) {
    this.firestore.collection('comments', ref => ref.where('videoId', '==', videoId))
      .valueChanges().subscribe(comments => {
        this.comments = comments;
      });
  }

  addComment(videoId: string) {

    if (!this.userId) {
      console.log('Error: No se encontró el userId');
      return;
    }

    if (this.newComment.trim() !== "") {
      this.firestore.collection('comments').add({
        videoId: videoId,
        userId: this.userId,  // Utiliza el ID del usuario autenticado
        content: this.newComment,
        timestamp: new Date().toISOString()
      });
      this.newComment = ""; // Limpiar el campo de comentario
    }
  }
  

  toggleLike(videoId: string) {

    // Verifica si `userId` está definido antes de hacer la consulta
  if (!this.userId) {
    console.log('Error: No se encontró el userId', this.userId);
    return;
  }

    const likeRef = this.firestore.collection('likes', ref => 
      ref.where('videoId', '==', videoId).where('userId', '==', this.userId));
    
    likeRef.get().subscribe(snapshot => {
      if (snapshot.empty) {
        // Si el usuario no ha dado like, lo agrega
        this.firestore.collection('likes').add({
          videoId: videoId,
          userId: this.userId
        });

        // Actualiza el contador de likes en la colección de videos
        this.firestore.doc(`videos/${videoId}`).update({
          likes: firebase.firestore.FieldValue.increment(1)
        });
      } else {
        // Si ya dio like, lo quita
        snapshot.docs[0].ref.delete();

        // Decrementa el contador de likes en la colección de videos
        this.firestore.doc(`videos/${videoId}`).update({
          likes: firebase.firestore.FieldValue.increment(-1)
        });
      }
    });
  }

  isLiked(videoId: string): Observable<boolean> {
    
    if (!this.userId) {
      console.log('Error: No se encontró el userId');
      return of(false); // Retorna false si no hay userId
    }

    return this.firestore.collection('likes', ref => 
      ref.where('videoId', '==', videoId).where('userId', '==', this.userId))
      .valueChanges()
      .pipe(
        map(likes => likes.length > 0)  // Retorna true si el usuario ya ha dado like
      );
  }
  

}
