// src/app/shared/components/navbar/navbar.component.ts

import { Component } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  isLoggedIn = false;
  userDisplayName: string | null = '';
  searchTerm: string = '';

  constructor(private authService: AuthService, private router: Router) {
    this.authService.getUser().subscribe((user) => {
      this.isLoggedIn = !!user;
      this.userDisplayName = user?.displayName || '';
    });
  }

  search() {
    if (this.searchTerm.trim()) {
      this.router.navigate(['/videos'], { queryParams: { search: this.searchTerm } });
    }
  }

  logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/login']);
    });
  }
}


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-navbar',
//   templateUrl: './navbar.component.html',
//   styleUrl: './navbar.component.scss'
// })
// export class NavbarComponent {

// }
