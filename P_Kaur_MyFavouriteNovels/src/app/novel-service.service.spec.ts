import { TestBed } from '@angular/core/testing';

import { NovelServiceService } from './novel-service.service';

describe('NovelServiceService', () => {
  let service: NovelServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NovelServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
