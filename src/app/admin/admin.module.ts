import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { RouterModule, Routes } from '@angular/router';
import { SheardModule } from '../sheard/sheard.module';

const routes: Routes = [
  { path: '', component: AdminComponent },

  {
    path: 'recipes',
    loadChildren: () =>
      import('../admin/recipes/recipes.module').then((m) => m.RecipesModule),
  },
  {
    path: 'Users',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
  },
  {
    path: 'categories',
    loadChildren: () =>
      import('../admin/categories/categories.module').then(
        (m) => m.CategoriesModule
      ),
  },
  {
    path: 'Users',
    loadChildren: () =>
      import('../admin/users/users.module').then((m) => m.UsersModule),
  },
  
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SheardModule],
  declarations: [AdminComponent],
})
export class AdminModule {}
