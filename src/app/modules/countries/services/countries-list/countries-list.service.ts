/* Place your angular imports here */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/* Place your RxJs imports here */
import { map, Observable } from 'rxjs';

@Injectable()
export class CountriesListService {

  constructor(private _http: HttpClient) { }

  public getCountriesList(): Observable<{ strArea: string}[]> {
    return this._http.get<{ meals: { strArea: string }[] }>('https://www.themealdb.com/api/json/v1/1/list.php?a=list').pipe(
      map((res: { meals: { strArea: string }[] }) => res.meals),
      map(meals => meals.filter(meal => meal.strArea !== 'Unknown'))
    )
  }
}
