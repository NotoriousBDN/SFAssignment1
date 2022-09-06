import { TestBed } from '@angular/core/testing';

import { GetRoomsService } from './get-rooms.service';

describe('GetRoomsService', () => {
  let service: GetRoomsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetRoomsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
