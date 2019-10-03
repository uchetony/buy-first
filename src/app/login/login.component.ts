import { AuthServiceService } from './../services/auth/auth-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bf-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthServiceService) { }

  ngOnInit() {
  }

  login() {
    // logs the user in
    this.authService.login()
  }
}
