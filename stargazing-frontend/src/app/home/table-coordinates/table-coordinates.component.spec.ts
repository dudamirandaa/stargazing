import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCoordinatesComponent } from './table-coordinates.component';

describe('TableCoordinatesComponent', () => {
  let component: TableCoordinatesComponent;
  let fixture: ComponentFixture<TableCoordinatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TableCoordinatesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TableCoordinatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
