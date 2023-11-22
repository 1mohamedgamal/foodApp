import { Component } from '@angular/core';

import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/auth/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(
    private _AuthService: AuthService,
    private _toastr: ToastrService
  ) {}

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
    console.log(data);

    this._AuthService.Onlogin(data.value).subscribe({
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
}
