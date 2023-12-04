import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipesComponent } from './recipes.component';
import { RouterModule, Routes } from '@angular/router';
import { SheardModule } from 'src/app/sheard/sheard.module';
import { AddEditRecipeComponent } from './add-edit-recipe/add-edit-recipe.component';

const routes: Routes = [
  { path: '', component: RecipesComponent },
  { path: 'add', component: AddEditRecipeComponent },
  { path: 'edit/:id', component: AddEditRecipeComponent },
  { path: 'view/:id', component: AddEditRecipeComponent },
];

@NgModule({
  imports: [CommonModule 
  , RouterModule.forChild(routes),SheardModule
  ],
  declarations: [RecipesComponent, AddEditRecipeComponent],
})
export class RecipesModule {}
