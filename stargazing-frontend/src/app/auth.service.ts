import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  isUserLoggedIn(){
    const token = this.getAuthorizationToken();
    if(!token) {
      return false;
    }
    return true;
  }

  getAuthorizationToken(){
    const token = window.localStorage.getItem('token');
    return token;
  }
}
