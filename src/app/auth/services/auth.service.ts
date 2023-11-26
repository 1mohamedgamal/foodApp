import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {


  role:string | null = '';
  constructor(private _HttpClient: HttpClient) {}


  getProfile(){
    let encoded : any = localStorage.getItem('userToken');
    let decoded : any = jwtDecode(encoded);
    console.log('role' , decoded.userGroup);
    localStorage.setItem('userName', decoded.userName);
this.getRole();
    }

    getRole()
    {
      if(localStorage.getItem('userToken') !== null && localStorage.getItem('role')){
        this.role = localStorage.getItem('role');
      }
    }

  Onlogin(data: any): Observable<any> {
    return this._HttpClient.post('Users/Login', data);
  }

  onResetRequest(data: string): Observable<any> {
    return this._HttpClient.post('Users/Reset/Request', { email: data });
  }
  resetPassword(data: any): Observable<any> {
    return this._HttpClient.post('Users/Reset', data);
  }

}

