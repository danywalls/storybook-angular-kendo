import { TestBed } from '@angular/core/testing';

import { AmazingUiService } from './amazing-ui.service';

describe('AmazingUiService', () => {
  let service: AmazingUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AmazingUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
