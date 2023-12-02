import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheardComponent } from './sheard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


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
  declarations: [SheardComponent, NavbarComponent, SidebarComponent, HomeComponent],
  exports: [
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    NavbarComponent,
    SidebarComponent
  ],
})
export class SheardModule {}
