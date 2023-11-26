import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-reset-password',
  templateUrl: './request-reset-password.component.html',
  styleUrls: ['./request-reset-password.component.scss'],
})
export class RequestResetPasswordComponent {
  email: string = '';
  constructor(
    private _router: Router,
    public dialogRef: MatDialogRef<RequestResetPasswordComponent>
  ) {}
  // email: string = '';
  requestEmail = new FormGroup({
    email: new FormControl(null, [
      Validators.required,
      Validators.pattern(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/),
    ]),
  });

  onNoClick(): void {
    this.dialogRef.close();
  }
}



