import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css'],
})
export class ResetPasswordComponent implements OnInit {
  constructor(
    private _AuthService: AuthService,
    private _toastr: ToastrService
  ) {}

  userEmail = localStorage.getItem('email');
  resetForm = new FormGroup({
    email: new FormControl(this.userEmail, [
      Validators.required,
      Validators.email,
    ]),
    confirmPassword: new FormControl(null, [
      Validators.required,
      Validators.pattern(
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/
      ),
    ]),
    seed: new FormControl(null, [Validators.required]),
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
    console.log(data);

    this._AuthService.resetPassword(data.value).subscribe({
      next: (res) => {
        console.log(res);
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

  ngOnInit() {}
}
