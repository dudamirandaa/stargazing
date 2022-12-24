import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkymapComponent } from './skymap.component';

describe('SkymapComponent', () => {
  let component: SkymapComponent;
  let fixture: ComponentFixture<SkymapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkymapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkymapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
