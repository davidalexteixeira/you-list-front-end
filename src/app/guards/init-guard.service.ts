import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Injectable()
export class InitGuardService {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(): Promise<boolean> {
    return this.authService.me()
      .then((user) => {
        this.router.navigate(['/playlist'])
        return true
      })
      .catch((error) => {
        console.error(error);
        return false;
      });
  }

}