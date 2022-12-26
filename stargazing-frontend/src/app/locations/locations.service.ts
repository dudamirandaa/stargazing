import { Location } from './../location';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationsService {

  constructor(private http: HttpClient) { }

  getLocations() {
    const userId = window.localStorage.getItem('id');
    return this.http.get<Location[]>('api/locations/' + userId);
  }
}
