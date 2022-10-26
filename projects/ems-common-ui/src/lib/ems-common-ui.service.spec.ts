import { TestBed } from '@angular/core/testing';

import { EmsCommonUiService } from './ems-common-ui.service';

describe('EmsCommonUiService', () => {
  let service: EmsCommonUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmsCommonUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
