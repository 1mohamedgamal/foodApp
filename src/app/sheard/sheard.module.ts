import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheardComponent } from './sheard.component';
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

@NgModule({
  imports: [
    CommonModule,
    ToastrModule.forRoot({}),
    MatIconModule,
    ReactiveFormsModule,
    FormsModule,
    MatDividerModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatPaginatorModule,
    NgxDropzoneModule,
    RouterModule,
  ],
  declarations: [
    SheardComponent,
    NavbarComponent,
    SidebarComponent,
    HomeComponent,
    DeleteComponent,
  ],
  exports: [
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatDialogModule,
    NavbarComponent,
    SidebarComponent,
    MatPaginatorModule,
    NgxDropzoneModule,
    DeleteComponent,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class SheardModule {}
