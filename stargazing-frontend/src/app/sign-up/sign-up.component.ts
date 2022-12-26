import { UserToken } from './../user-token';
import { Router } from '@angular/router';
import { SignUpService } from './sign-up.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  username = '';
  password = '';
  usernameVisibility = false;
  passwordVisibility = false;

  constructor(
    private signUpService: SignUpService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  signUp() {
    if (!this.validateSignupForm()) {
      return;
    }
    this.signUpService.signUp(this.username, this.password).subscribe((resp: UserToken) => {
      console.log(resp)
        if(!resp || resp === null) {
          alert("There was an error signing up. Please try again.");
          return;
        }
        alert("Signed up successfully!")
        window.localStorage.setItem('token', resp.token);
        window.localStorage.setItem('id', resp.userId);
        this.router.navigate(['']);
      });
  }

  validateSignupForm(): boolean {
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
