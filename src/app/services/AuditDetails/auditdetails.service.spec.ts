import { TestBed } from '@angular/core/testing';

import { AuditdetailsService } from './auditdetails.service';

describe('AuditdetailsService', () => {
  let service: AuditdetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuditdetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
