import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { FormLoginService } from '../login/form-login/form-login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private formLoginService: FormLoginService
  ) { }

  ngOnInit(): void {
  }

  isUserLoggedIn() {
    return this.authService.isUserLoggedIn();
  }

  logout() {
    this.formLoginService.logout();
  }
}
