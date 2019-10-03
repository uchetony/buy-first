import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireObject,  } from 'angularfire2/database';
import * as firebase from 'firebase';
import { AppUser } from 'src/app/models/app-user/app-user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private db: AngularFireDatabase

  ) { }

  // update the database with the user details
  update(user: firebase.User) {

    this.db.object('/users/' + user.uid).update({
      name: user.displayName,
      email: user.email
    })

  }

  get(uid: string): AngularFireObject<AppUser> {

      return this.db.object('/users/' + uid);
  }
}
