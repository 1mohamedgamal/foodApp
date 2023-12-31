import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRecipesComponent } from './userRecipes.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/sheard/shared.module';
import { RecipeDataComponent } from './recipe-data/recipe-data/recipe-data.component';

const routes: Routes = [
  {
    path: '',
    component: UserRecipesComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  declarations: [UserRecipesComponent, RecipeDataComponent],
})
export class UserRecipesModule {}
