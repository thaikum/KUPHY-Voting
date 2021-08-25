import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyVoterComponent } from './verify-voter.component';

describe('VerifyVoterComponent', () => {
  let component: VerifyVoterComponent;
  let fixture: ComponentFixture<VerifyVoterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerifyVoterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerifyVoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
