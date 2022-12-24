import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-coordinates',
  templateUrl: './table-coordinates.component.html',
  styleUrls: ['./table-coordinates.component.scss']
})
export class TableCoordinatesComponent implements OnInit {
  @Input() desc: string = '';
  @Input() lat: string = '';
  @Input() long: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
