import { ToastrServiceService } from './../toastr/toastr-service.service';
import { UsersService } from './../users/users.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable, of } from 'rxjs';
import { AppUser } from 'src/app/models/app-user/app-user';
import { switchMap } from 'rxjs/operators';


@Injectable(
  {providedIn: 'root'}
  )
export class AuthServiceService {
  // get user as an observable from firebase database
  user$: Observable<firebase.User>;

  // instance to sign in with google
  googleSignIn = new firebase.auth.GoogleAuthProvider();

  // store the url so we can navigate after loggin in....used in the route guard
  redirectUrl: string;

  constructor(private afAuth: AngularFireAuth,
              private routes: ActivatedRoute,
              private userService: UsersService,
              private router: Router,
              private toastr: ToastrServiceService) { 
    // this observable is unwrapped in the template using the async pipe.
    // this is done so that user$ is automatically unsubscribed from, when the
    // component is killed.
    this.user$ =  this.afAuth.authState;
  }
    
  login() {
    // get the query params return url and store it in  local stoarge
    let returnUrl = this.routes.snapshot.queryParamMap.get('returnUrl') || '/';
    localStorage.setItem('returnUrl', returnUrl);

    this.afAuth.auth.signInWithRedirect(this.googleSignIn);
  }

  logout() {
    this.afAuth.auth.signOut();

    // if (this.router.url !== '/login') {
    //   // Toastr message
    //   this.toastr.warning('Logged Out');
      
    //   // navigate the user back to the login page
    //   this.router.navigate(['/login'])
    // }

  }

  // this gets the app users from the database
  get appUser$(): Observable<AppUser> {
    return this.user$
      .pipe(switchMap(user => {
        if (user) return this.userService.get(user.uid).valueChanges()

        return of<AppUser>(null)
      }))
  }
}
