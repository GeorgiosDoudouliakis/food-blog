import { TestBed } from '@angular/core/testing';

import { CountryMealsService } from './country-meals.service';

describe('CountryMealsService', () => {
  let service: CountryMealsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountryMealsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
