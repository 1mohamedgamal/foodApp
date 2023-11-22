import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class GlobalInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const token = localStorage.getItem('token');
    const baseUrl: string = 'http://upskilling-egypt.com:3002/api/v1/';

    let newheaders = {};
    if (token !== null) {
      newheaders = { Authorization: `Bearer ${token}` };
    }

    let cloned = request.clone({
      setHeaders: newheaders,
      url: baseUrl + request.url,
    });

    return next.handle(cloned);
  }
}
