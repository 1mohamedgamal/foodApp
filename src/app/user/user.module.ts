import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { UsersComponent } from './users.component';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { SheardModule } from '../sheard/sheard.module';
// import { SheardModule } from 'src/app/sheard/sheard.module';
// import { UsersComponent } from '../admin/users/users.component';

const routes: Routes = [{ path: '', component: UserComponent }];


@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SheardModule],
  declarations: [UserComponent],
})
export class UsersModule {}
