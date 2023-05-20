/* Place your angular imports here */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/* Place your RxJs imports here */
import { concatMap, Observable, of, pluck } from 'rxjs';

/* Place any other imports here */
import { Meal } from '@shared/models/meal.model';

@Injectable()
export class CategoryMealsService {

  constructor(private _http: HttpClient) { }

  public getCategoryMeals(category: string): Observable<Meal[]> {
    return of(null).pipe(
      concatMap(() => this._http.get<{ meals: Meal[] }>(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)),
      pluck('meals')
    )
  }
}
