import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';

import { RouterModule, Routes } from '@angular/router';

import { SheardModule } from '../sheard/sheard.module';

import { HomeComponent } from '../sheard/home/home.component';

import { adminGuard } from '../guards/adminguard.guard';

import { userGuard } from '../guards/userguard.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      {
        path: 'admin',
        canActivate: [adminGuard],
        loadChildren: () =>
          import('../admin/admin.module').then((m) => m.AdminModule),
      },
      {
        path: 'user',
        canActivate: [userGuard],
        loadChildren: () =>
          import('../user/user.module').then((m) => m.UsersModule),
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, SheardModule, RouterModule.forChild(routes)],
  declarations: [DashboardComponent],
})
export class DashboardModule {}
