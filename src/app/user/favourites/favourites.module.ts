import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FavouritesComponent } from './favourites.component';
import { RouterModule, Routes } from '@angular/router';
import { SheardModule } from 'src/app/sheard/sheard.module';

const routes: Routes = [
  {
    path: '',
    component: FavouritesComponent,
  },
];

@NgModule({
  imports: [CommonModule, SheardModule, RouterModule.forChild(routes)],
  declarations: [FavouritesComponent],
})
export class FavouritesModule {}
