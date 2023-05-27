/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { RandomMealService } from './random-meal.service';

describe('Service: RandomMeal', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RandomMealService]
    });
  });

  it('should ...', inject([RandomMealService], (service: RandomMealService) => {
    expect(service).toBeTruthy();
  }));
});
