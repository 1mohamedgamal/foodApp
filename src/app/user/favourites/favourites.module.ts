import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouritesComponent } from './favourites.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/sheard/shared.module';

const routes: Routes = [
  {
    path: '',
    component: FavouritesComponent,
  },
];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  declarations: [FavouritesComponent],
})
export class FavouritesModule {}
