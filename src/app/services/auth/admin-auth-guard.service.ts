import { UsersService } from './../users/users.service';
import { AuthServiceService } from './auth-service.service';
import { Injectable } from '@angular/core';
import { map, switchMap } from 'rxjs/operators'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuardService {

  constructor(private authService: AuthServiceService,
              private userService: UsersService) { }

  canActivate(): Observable<boolean> {

    return this.authService.appUser$
      .pipe(map(appUser => appUser.isAdmin))  
  }
}
