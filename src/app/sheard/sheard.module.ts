import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheardComponent } from './sheard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { SpinnerComponent } from './spinner/spinner.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    RouterModule,
  ],
  declarations: [
    SheardComponent,
    SpinnerComponent,
    NavbarComponent,
    SidebarComponent,
  ],
  exports: [
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    SpinnerComponent,
    NavbarComponent,
    SidebarComponent,
  ],
})
export class SheardModule {}
