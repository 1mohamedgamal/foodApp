import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AuthComponent } from './auth.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SheardModule } from '../sheard/sheard.module';
import { RequestResetPasswordComponent } from './request-reset-password/request-reset-password.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { SpinnerComponent } from '../sheard/spinner/spinner.component';
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
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes), SheardModule],
  declarations: [
    LoginComponent,
    RequestResetPasswordComponent,
    ResetPasswordComponent,
  ],
})
export class AuthModule {}
