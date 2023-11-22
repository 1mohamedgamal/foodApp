import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheardComponent } from './sheard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  declarations: [SheardComponent],
  exports: [MatIconModule, MatDividerModule, MatButtonModule ,HttpClientModule,
    ReactiveFormsModule],
})
export class SheardModule {}
