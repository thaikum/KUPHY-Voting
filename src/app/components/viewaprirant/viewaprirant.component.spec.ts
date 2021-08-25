import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewaprirantComponent } from './viewaprirant.component';

describe('ViewaprirantComponent', () => {
  let component: ViewaprirantComponent;
  let fixture: ComponentFixture<ViewaprirantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewaprirantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewaprirantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
