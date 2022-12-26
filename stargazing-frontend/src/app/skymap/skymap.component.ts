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
    this.buildURL();
    console.log(this.url);

  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes['desc']);
    if (changes['desc']) {
      this.desc = changes['desc'].currentValue;
    }
    console.log(this.desc);
    this.buildURL();
    console.log(this.url);

  }

  buildURL() {
    this.url = 'https://slowe.github.io/VirtualSky/embed?latitude=' + this.lat + '&longitude=' + this.long + '&projection=PROJECTION&constellations=CONSTELLATIONS&meteorshowers=METEORSHOWERS&showstarlabels=SHOWSTLABELS&live=LIVE&az=AZIMUTH';
    const iframe = document.getElementById('iframe');
    if (iframe != null) {
      iframe.innerHTML= '<iframe width="500" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="' + this.url +  ' | safe" allowTransparency="true"></iframe>';
    }
  }
}

