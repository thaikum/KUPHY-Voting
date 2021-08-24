import { TestBed } from '@angular/core/testing';

import { AspirantService } from './aspirant.service';

describe('AspirantService', () => {
  let service: AspirantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AspirantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
