import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  constructor(private httpClient: HttpClient) { }

  signUp(username: string, password: string): Observable<any> {
    return this.httpClient.post('api/signup', {username: username, password: password}, {responseType: 'text'});
  }
}
