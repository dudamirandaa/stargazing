import { UserToken } from './../../user-token';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FormLoginService {

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  login(username: string, password: string): Observable<UserToken> {
    return this.http.post<UserToken>('api/login', {username: username, password: password});
  }

  logout() {
    window.localStorage.setItem('token', '');
    window.localStorage.setItem('id', '');
  }
}
