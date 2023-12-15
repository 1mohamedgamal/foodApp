import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheardComponent as sharedComponent } from './shared.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { ToastrModule } from 'ngx-toastr';
import { DeleteComponent } from './delete/delete/delete.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MatCardModule } from '@angular/material/card';
import { ThemeSwitchComponent } from './switch theme/theme-switch/theme-switch.component';

import { MatButtonToggleModule } from '@angular/material/button-toggle';


//   BrowserModule,
    //BrowserAnimationsModule,
    //MatCardModule,
    //MatButtonModule,

@NgModule({
  imports: [
    CommonModule,
    ToastrModule.forRoot({}),
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,MatCardModule,
    MatDividerModule,MatButtonToggleModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatPaginatorModule,
    NgxDropzoneModule,
    RouterModule,
  ],
  declarations: [
    sharedComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    DeleteComponent,ThemeSwitchComponent,
    ThemeSwitchComponent,
  ],
  exports: [
    MatIconModule,MatCardModule,
    MatDividerModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    NavbarComponent,
    SidebarComponent,
    MatPaginatorModule,
    NgxDropzoneModule,
    DeleteComponent,ThemeSwitchComponent,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class SharedModule {}
