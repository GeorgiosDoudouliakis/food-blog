/* Place your angular imports here */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/* Place your RxJs imports here */
import { concatMap, Observable, of, pluck } from 'rxjs';

/* Place any other imports here */
import { Meal } from '@shared/models/meal.model';

@Injectable()
export class CountryMealsService {

  constructor(private _http: HttpClient) { }

  public getCountryMeals(country: string): Observable<Meal[]> {
    return of(null).pipe(
      concatMap(() => this._http.get<{ meals: Meal[] }>(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`)),
      pluck('meals')
    )
  }
}
