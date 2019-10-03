import { UsersService } from './services/users/users.service';
import { AuthServiceService } from './services/auth/auth-service.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  constructor(private authService: AuthServiceService,
              private router: Router,
              private userService: UsersService) {}

  ngOnInit() {
    this.authService.user$.subscribe(
      user => {
        if (user) {

           // anytime the user logs in, update the database with the user info
          this.userService.update(user);

          // anytime the user logs in, take the user to the last page before logging in
          let returnUrl = localStorage.getItem('returnUrl')
          this.router.navigateByUrl(returnUrl);

        }
      }
    );
  }

  // ngOnDestroy() {
  //   this.authService.user$.unsubscribe()
  // }

}
