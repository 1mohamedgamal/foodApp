import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { SheardModule } from '../sheard/sheard.module';
import { AdminModule } from '../admin/admin.module';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'admin',
        loadChildren: () =>
          import('../admin/admin.module').then((m) => m.AdminModule),
      },
      {
        path: 'admin',
        loadChildren: () =>
          import('../user/user.module').then((m) => m.UserModule),
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, SheardModule, RouterModule.forChild(routes)],
  declarations: [DashboardComponent],
})
export class DashboardModule {}
