import { TestBed } from '@angular/core/testing';

import { TimeEvaluationService } from './time-evaluation.service';

describe('TimeEvaluationService', () => {
  let service: TimeEvaluationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimeEvaluationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
