import { UserToken } from './../../user-token';
import { FormLoginService } from './form-login.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.scss']
})
export class FormLoginComponent implements OnInit {
  username = '';
  password = '';
  usernameVisibility = false;
  passwordVisibility = false;

  constructor(private formLoginService: FormLoginService, private router: Router) {}

  ngOnInit(): void {
  }

  login() {
    if (!this.validateLoginForm()) {
      return;
    }
    this.formLoginService.login(this.username, this.password).subscribe((resp: UserToken) => {
        if(!resp) {
          alert("We couldn't find this user in your database.");
          return;
        }
        window.localStorage.setItem('token', resp.token);
        window.localStorage.setItem('id', resp.userId);
        this.router.navigate(['']);
        alert("Login success.")
      });
  }

  validateLoginForm(): boolean {
    if (!this.username) {
      this.usernameVisibility = true;
      return false;
    }
    this.usernameVisibility = false;
    if (!this.password) {
      this.passwordVisibility = true;
      return false;
    }
    this.passwordVisibility = false;
    return true;
  }
}
