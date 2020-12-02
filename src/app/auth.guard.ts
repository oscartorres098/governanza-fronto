import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    public authService: AuthService,
    private router: Router
  ) { }

  canActivate(): boolean {
    if (this.authService.loggedIn()) {
      return true;
    }

    this.router.navigate(['/signin']);
    return false;
  }

  isAdmin(): boolean {
    if (this.authService.isAdmin()) {
      return true;
    }

    this.router.navigate(['/acercade']);
    return false;
  }

}
