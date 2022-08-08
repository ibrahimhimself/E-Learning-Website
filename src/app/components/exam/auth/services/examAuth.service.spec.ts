import { TestBed } from '@angular/core/testing';

import { ExamAuthService } from './examAuth.service';

describe('AuthService', () => {
  let service: ExamAuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamAuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
