import { AuthServiceService } from './../services/auth/auth-service.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs';
import { AppUser } from '../models/app-user/app-user';

@Component({
  selector: 'bf-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  
  appUser: AppUser;

  userDropdownList = [
    {name: "My Orders", link: "/dashboard/myorders", admin: false},
    {name: "Manage Products", link: "/dashboard/manageproducts", admin: true},
    {name: "User Activity", link: "/dashboard/useractivity", admin: true}
  ]

  constructor(private authService: AuthServiceService) { 

  }

  ngOnInit() {
    this. authService.appUser$.subscribe(
      appUser => this.appUser = appUser
    ) 
  }

  logout() {
    // logs the user out
    this.authService.logout()
  }

}
