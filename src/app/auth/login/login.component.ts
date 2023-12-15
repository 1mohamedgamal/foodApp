import { Component } from '@angular/core';

import { FormGroup, Validators, FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/services/auth.service';
import { RequestResetPasswordComponent } from '../request-reset-password/request-reset-password.component';
import { Router } from '@angular/router';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private _AuthService: AuthService,
    private _toastr: ToastrService,
    public dialog: MatDialog,
    private _router: Router
  ) {}
  message: string = '';
  // message: string | null = null; // Initialize 'message' property

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
      ),
    ]),
  });

  showPassword: boolean = false; // Variable to track password visibility

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }
  onSubmit(data: FormGroup) {
    // debugger;
    console.log(data);

    this._AuthService.Onlogin(data.value).subscribe({
      next: (res) => {
        // let isClient = this._AuthService.isClientUser();

        this._router.navigate(['/dashboard']);
      },
      error: (err: any) => {
        console.log(err.error.message);

        this._toastr.error(err.error.message, 'Focus password failed ');
      },
      complete: () => {
        this._toastr.success('Welcome Bro');
        // this._router.navigate(['/admin/dashboard'])
      },
    });
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(RequestResetPasswordComponent, {
      data: {},
      width: '30%',
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        this.onResetRequest(result);
      }
    });
  }
  onResetRequest(email: string): void {
    this._AuthService.onResetRequest(email).subscribe({
      next: (res) => {
        console.log(res);
        this.message = res.message;
        localStorage.setItem('userToken', res.token);
        this._AuthService.getProfile();
      },
      error: (err) => {
        console.log(err.error.message);

        this._toastr.error(err.error.message);
      },
      complete: () => {
        this._router.navigate(['/auth/reset-password']);
        this._toastr.success(this.message);
        localStorage.setItem('email', email);
      },
    });
  }
}
  