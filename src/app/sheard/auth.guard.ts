import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';
import { Injectable } from '@angular/core';
@Injectable()
 export class AppAuthGuard implements CanActivate {
  constructor(private authService:AuthService,private router:Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
      if(this.authService.isLoggined()){
        return true
      }
      return this.router.navigate(['/auth/login']);

  }
}