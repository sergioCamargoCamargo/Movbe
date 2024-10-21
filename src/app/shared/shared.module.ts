
// src/app/shared/shared.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { DateFormatPipe } from './pipes/date-format.pipe';
import { TruncateTextPipe } from './pipes/truncate-text.pipe';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    NavbarComponent, 
    FooterComponent,
    ClickOutsideDirective,
    DateFormatPipe,
    TruncateTextPipe,
    ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,],
  exports: [NavbarComponent, FooterComponent], // Exporta los componentes
})
export class SharedModule {}


// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';



// @NgModule({
//   declarations: [],
//   imports: [
//     CommonModule
//   ]
// })
// export class SharedModule { }
