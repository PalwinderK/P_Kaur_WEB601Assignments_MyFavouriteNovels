import { TestBed } from '@angular/core/testing';

import { AddMyNovelsService } from './add-my-novels.service';

describe('AddMyNovelsService', () => {
  let service: AddMyNovelsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddMyNovelsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
