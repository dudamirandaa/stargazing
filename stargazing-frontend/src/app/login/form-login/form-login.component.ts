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

  constructor(private formLoginService: FormLoginService, private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
  }

  login() {
    if (!this.validateFormLogin()) {
      return;
    }
    this.http.post('api/login', {username: this.username, password: this.password}).subscribe((resp) => {
      console.log(resp)
        if(!resp) {
          alert("We couldn't find this user in your database.")
        } else {
          this.router.navigate(['']);
          alert("Login success.")
        }
      });
  }

  validateFormLogin(): boolean {
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
