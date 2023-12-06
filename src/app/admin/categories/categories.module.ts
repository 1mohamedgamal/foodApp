import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesComponent } from './categories.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/sheard/shared.module';
import { CategoriesService } from './services/categories.service';
import { AddEditCategoryComponent } from './components/add-edit-category/add-edit-category.component';
import { DeleteComponent } from './components/delete/delete.component';
import { FormsModule } from '@angular/forms';

const routes: Routes = [{ path: '', component: CategoriesComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    SharedModule,
    FormsModule,
  ],
  providers: [CategoriesService],
  declarations: [
    CategoriesComponent,
    AddEditCategoryComponent,
    DeleteComponent,
  ],
})
export class CategoriesModule {}
