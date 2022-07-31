import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    protected readonly router: Router,
    private authService: AuthService
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.isLoggedIn()) {
        return true;
    }

    this.router.navigate(['/login']);
    return false;
  }

  private isLoggedIn(): boolean {
      let status = false;

      if (localStorage.getItem('isLoggedIn') === 'true') {
          status = true;
      } else {
          status = false;
      }

      return status;
  }

}
