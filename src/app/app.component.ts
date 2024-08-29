import { Component } from '@angular/core';
import { Firestore, collectionData, collection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WebMovbe';

  items$: Observable<any[]>;

  constructor(firestore: Firestore) {
    const itemsCollection = collection(firestore, 'items');
    this.items$ = collectionData(itemsCollection);
  }

}
