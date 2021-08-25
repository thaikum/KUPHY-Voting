import { TestBed } from '@angular/core/testing';

import { VotingManageService } from './voting-manage.service';

describe('VotingManageService', () => {
  let service: VotingManageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VotingManageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
