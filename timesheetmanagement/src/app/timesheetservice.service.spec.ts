import { TestBed } from '@angular/core/testing';

import { TimesheetserviceService } from './timesheetservice.service';

describe('TimesheetserviceService', () => {
  let service: TimesheetserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimesheetserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
