import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAspirantsComponent } from './add-aspirants.component';

describe('AddAspirantsComponent', () => {
  let component: AddAspirantsComponent;
  let fixture: ComponentFixture<AddAspirantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAspirantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAspirantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
