import { AuthServiceService } from './auth-service.service';
import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  
  constructor(private authService: AuthServiceService,
              private router: Router) { }

  canActivate(routes:ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    return this.authService.user$.pipe(map(
      (user) => {
        if (user) return true;

        this.router.navigate(['/login'], {queryParams: { returnUrl: state.url} });
        return false;
      }
    ))
  }


}
