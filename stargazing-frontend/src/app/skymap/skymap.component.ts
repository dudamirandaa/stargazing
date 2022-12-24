import { SafePipe } from '../safe-pipe';
import { Location } from '../location';
import { Component, Input, OnChanges, OnInit, SecurityContext, SimpleChanges } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';

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
    console.log(this.desc);

      this.url = 'https://slowe.github.io/VirtualSky/embed?lat=' + this.lat + '&long=' + this.long + '&projection=PROJECTION&constellations=CONSTELLATIONS&meteorshowers=METEORSHOWERS&showstarlabels=SHOWSTLABELS&live=LIVE&az=AZIMUTH';
      console.log(this.url);

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes['desc']);
    if (changes['desc']) {
      this.desc = changes['desc'].currentValue;
    }
    console.log(this.desc);

      this.url = 'https://slowe.github.io/VirtualSky/embed?lat=' + this.lat + '&long=' + this.long + '&projection=PROJECTION&constellations=CONSTELLATIONS&meteorshowers=METEORSHOWERS&showstarlabels=SHOWSTLABELS&live=LIVE&az=AZIMUTH';
      console.log(this.url);

  }

}

