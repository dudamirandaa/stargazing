import { Location } from '../../location';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-coordinates',
  templateUrl: './coordinates.component.html',
  styleUrls: ['./coordinates.component.scss']
})
export class CoordinatesComponent implements OnInit {
  cityName = '';
  cityNameVisibility = false;
  tableVisibility = false;
  location: Location = {
    desc: '',
    lat: '',
    long: ''
  };

  @Output() locationEvent = new EventEmitter<Location>();

  constructor() { }

  ngOnInit(): void {
  }

  search() {
    if (!this.validateFormCity()) {
      return;
    }
    fetch(`https://nominatim.openstreetmap.org/search?q=${this.cityName}&format=json&limit=1`)
      .then(response => response.json())
      .then(data => {
        this.location.desc = data[0].display_name;
        this.location.lat = data[0].lat;
        this.location.long = data[0].lon;
        this.tableVisibility = true;
        this.locationEvent.emit(this.location);
      })
      .catch(error => console.error(error));
  }

  validateFormCity() {
    if (!this.cityName) {
      this.cityNameVisibility = true;
      this.tableVisibility = false;
      return false;
    }
    this.cityNameVisibility = false;
    return true;
  }
}
