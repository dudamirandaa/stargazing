import { Location } from '../location';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  location: Location = {
    description: '',
    lat: '',
    long: ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  locationEvent(location: Location) {
    this.location = location;
  }
}
