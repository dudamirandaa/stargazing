import { CoordinatesComponent } from './../home/coordinates/coordinates.component';
import { Location } from './../location';
import { LocationsService } from './locations.service';
import { Component, Input, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.scss']
})
export class LocationsComponent implements OnInit {
  locations: Location[] = [];

  constructor(
    private locationsService: LocationsService,
    private router: Router,
    private coordinatesComponent: CoordinatesComponent
  ) { }

  ngOnInit(): void {
    this.listLocations();
    console.log(this.locations);
  }

  async listLocations() {
    console.log("lit locations");
    await this.locationsService.getLocations().subscribe((locations) => {
      console.log(locations);
      this.locations = locations;
      console.log(this.locations);
    })
  }

  searchLocation(desc: string) {
    this.router.navigate(
      [''],
      { queryParams: { cityName: desc } }
      );
  }
}
