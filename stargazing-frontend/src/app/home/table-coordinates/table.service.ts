import { Location } from './../../location';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private http: HttpClient) { }

  insertLocation(desc: string) {
    const userId = window.localStorage.getItem('id');
    const location = this.createLocation(desc, userId);
    console.log(location);
    console.log(userId);
    return this.http.post('api/locations', location);
  }

  createLocation(desc: string, userId: string | null) {
    return {
      description: desc,
      userId: userId ? parseInt(userId) : null
    }
  }
}
