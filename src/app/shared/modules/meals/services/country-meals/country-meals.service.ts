/* Place your angular imports here */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/* Place your RxJs imports here */
import { map, Observable } from 'rxjs';

/* Place your interface imports here */
import { Meal } from '../../interfaces/meal.interface';

@Injectable()
export class CountryMealsService {

  constructor(private _http: HttpClient) { }

  public getCountryMeals(country: string): Observable<Meal[]> {
    return this._http.get<{ meals: Meal[] }>(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`).pipe(
      map((res: { meals: Meal[] }) => res.meals)
    )
  }
}
