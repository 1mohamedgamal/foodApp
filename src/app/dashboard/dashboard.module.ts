import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import { DashboardComponent } from './dashboard.component';

import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../sheard/shared.module';

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
      {
        path: 'profile',
        loadChildren: () =>
          import('../profile/profile.module').then((m) => m.ProfileModule),
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
  declarations: [DashboardComponent],
})
export class DashboardModule {}
