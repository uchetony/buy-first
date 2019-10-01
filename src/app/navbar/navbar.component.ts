import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'bf-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  userDropdownList = [
    "My Orders",
    "Manage Products"
  ]

  constructor() { }

  ngOnInit() {
  }

}
