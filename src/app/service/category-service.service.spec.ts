import { TestBed } from '@angular/core/testing';

import { categoryServiceService } from './category-service.service';

describe('categoryServiceService', () => {
  let service: categoryServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(categoryServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
