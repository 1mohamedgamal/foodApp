import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheardComponent } from './sheard.component';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  imports: [CommonModule, MatIconModule, MatDividerModule, MatButtonModule],
  declarations: [SheardComponent],
  exports: [MatIconModule, MatDividerModule, MatButtonModule]
})
export class SheardModule {}
