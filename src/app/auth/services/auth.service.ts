import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  role: string | null = '';
  constructor(private _HttpClient: HttpClient) {
    if (localStorage.getItem('userToken') !== null) {
      this.getProfile();
    }
  }

  getProfile() {
    let encoded: any = localStorage.getItem('userToken');
    let decoded: any = jwtDecode(encoded);
    console.log('role', decoded.userGroup);
    localStorage.setItem('userName', decoded.userName);
    this.getRole();
  }

  getRole() {
    console.log(localStorage.getItem('role'));
    console.log(localStorage.getItem('userToken'));

    if (
      localStorage.getItem('userToken') !== null &&
      localStorage.getItem('role') !== null
    ) {
      this.role = localStorage.getItem('role');
    }
  }

  Onlogin(data: any): Observable<any> {
    return this._HttpClient.post('Users/Login', data).pipe(
      tap((data: any) => {
        if (data.token) {
          localStorage.setItem('userToken', data.token);
          let decoded: any = jwtDecode(data.token);
          localStorage.setItem('role', decoded.userGroup);
        }
      })
    );
  }

  onResetRequest(data: string): Observable<any> {
    return this._HttpClient.post('Users/Reset/Request', { email: data });
  }
  resetPassword(data: any): Observable<any> {
    return this._HttpClient.post('Users/Reset', data);
  }

  isClientUser() {
    let encoded: any = localStorage.getItem('userToken');
    if (encoded) {
      let decoded: any = jwtDecode(encoded);
      if (decoded.userGroup == 'SuperAdmin') {
        return false;
      }
      return true;
    }
    return false;
  }

  isLoggined() {
    let encoded: any = localStorage.getItem('userToken');
    if (encoded) {
      let decoded: any = jwtDecode(encoded);
      if (decoded?.userGroup) {
        return true;
      }
    }

    return false;
  }
  onChangePassword(data: any): Observable<any> {
    return this._HttpClient.put('Users/ChangePassword', data);
  }
}
