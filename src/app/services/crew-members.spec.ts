import { TestBed } from '@angular/core/testing';

import { CrewMembers } from './crew-members';

describe('CrewMembers', () => {
  let service: CrewMembers;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrewMembers);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
