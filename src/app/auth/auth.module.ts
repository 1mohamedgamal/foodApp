import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../sheard/shared.module';
import { RequestResetPasswordComponent } from './request-reset-password/request-reset-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { LogOutComponent } from './log-out/log-out.component';
// SpinnerComponent
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
  },
  {
    path: 'change-password',
    component: ChangePasswordComponent,
  },
  {
    path: 'logout',
    component: LogOutComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SharedModule],
  declarations: [
    LoginComponent,
    RequestResetPasswordComponent,
    ResetPasswordComponent,
    ChangePasswordComponent,
    LogOutComponent,
  ],
})
export class AuthModule {}
