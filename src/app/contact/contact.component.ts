// src/app/contact/contact.component.ts

import { Component } from '@angular/core';
import { ContactService } from '../core/services/contact.service';
import { NotificationService } from '../core/services/notification.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';

  constructor(private contactService: ContactService, private notificationService: NotificationService) {}

  sendMessage() {
    const data = {
      name: this.name,
      email: this.email,
      message: this.message,
    };

    this.contactService.sendMessage(data).then(() => {
      this.notificationService.showSuccess('Mensaje enviado exitosamente.');
      this.name = '';
      this.email = '';
      this.message = '';
    }).catch((error) => {
      this.notificationService.showError('Error al enviar el mensaje: ' + error.message);
    });
  }
}


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-contact',
//   templateUrl: './contact.component.html',
//   styleUrl: './contact.component.scss'
// })
// export class ContactComponent {

// }
