import { TestBed } from '@angular/core/testing';

import { SheetsApiService } from './sheets-api.service';

describe('SheetsApiService', () => {
  let service: SheetsApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SheetsApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
