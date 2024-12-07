import { TestBed } from '@angular/core/testing';

import { MySharedLibraryService } from './my-shared-library.service';

describe('MySharedLibraryService', () => {
  let service: MySharedLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MySharedLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
