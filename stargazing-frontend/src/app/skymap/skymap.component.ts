import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
@Component({
  selector: 'app-skymap',
  templateUrl: './skymap.component.html',
  styleUrls: ['./skymap.component.scss']
})
export class SkymapComponent implements OnInit, OnChanges {
  url: string = '';

  @Input() desc: string = '';
  @Input() lat: string = '';
  @Input() long: string = '';

  constructor() { }

  ngOnInit(): void {
    this.buildURL();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['desc']) {
      this.desc = changes['desc'].currentValue;
    }
    this.buildURL();
  }

  buildURL() {
    this.url = 'https://slowe.github.io/VirtualSky/embed?&projection=lambert&latitude=' + this.lat + '&longitude=' + this.long + '&constellations=true&gridlines_az=true&gridlines_eq=true&az=320.3791587091725';
    const iframe = document.getElementById('iframe');
    if (iframe != null) {
      iframe.innerHTML= '<iframe width="700" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="' + this.url +  ' | safe" allowTransparency="true"></iframe>';
    }
  }
}

// src="http://slowe.github.io/VirtualSky/embed?&projection=lambert&constellations=true&gridlines_az=true&gridlines_eq=true&az=320.3791587091725"
