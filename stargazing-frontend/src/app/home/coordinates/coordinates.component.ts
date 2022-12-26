import { Location } from '../../location';
import { Component, EventEmitter, Injectable, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coordinates',
  templateUrl: './coordinates.component.html',
  styleUrls: ['./coordinates.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class CoordinatesComponent implements OnInit {
  cityName = '';
  cityNameVisibility = false;
  tableVisibility = false;
  location: Location = {
    description: '',
    lat: '',
    long: ''
  };

  @Output() locationEvent = new EventEmitter<Location>();

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.route.queryParams) {
      this.route.queryParams.subscribe((params) => {
        if (params['cityName']) {
          this.cityName = params['cityName'];
          this.search(this.cityName);
        }
      })
    }
  }

  validateAndSearch() {
    if (!this.validateFormCity()) {
      return;
    }
    this.search(this.cityName);
  }

  search(cityName: string) {
    fetch(`https://nominatim.openstreetmap.org/search?q=${cityName}&format=json&limit=1`)
      .then(response => response.json())
      .then(data => {
        this.location.description = data[0].display_name;
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
