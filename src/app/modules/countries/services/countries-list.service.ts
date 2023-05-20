/* Place your angular imports here */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/* Place your RxJs imports here */
import { concatMap, map, Observable, of, pluck } from 'rxjs';

@Injectable()
export class CountriesListService {

  constructor(private _http: HttpClient) { }

  public getCountriesList(): Observable<{ strArea: string}[]> {
    return of(null).pipe(
      concatMap(() => this._http.get<{ meals: { strArea: string }[] }>('https://www.themealdb.com/api/json/v1/1/list.php?a=list')),
      pluck('meals'),
      map(meals => meals.filter(meal => meal.strArea !== 'Unknown'))
    )
  }
}
