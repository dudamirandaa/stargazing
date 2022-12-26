import { CoordinatesComponent } from './../home/coordinates/coordinates.component';
import { Location } from './../location';
import { LocationsService } from './locations.service';
import { Component, OnInit } from '@angular/core';
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
  }

  async listLocations() {
    await this.locationsService.getLocations().subscribe((locations) => {
      this.locations = locations;
    })
  }

  searchLocation(desc: string) {
    this.router.navigate(
      [''],
      { queryParams: { cityName: desc } }
      );
  }
}
