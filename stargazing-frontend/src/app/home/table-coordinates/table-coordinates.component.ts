import { TableService } from './table.service';
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

  constructor(private tableService: TableService) { }

  ngOnInit(): void {
  }

  save(desc: string) {
    this.tableService.insertLocation(desc).subscribe((resp) => {
      if (!resp) {
        alert("Could not save.");
          return;
      }
      alert("Saved successfully.")
    });
  }
}
