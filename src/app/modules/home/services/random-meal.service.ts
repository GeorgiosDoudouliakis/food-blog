/* Place your angular imports here */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/* Place your service imports here */
import { Observable, map } from 'rxjs';

/* Place your interface imports here */
import { Recipe } from '@shared/interfaces/recipe.interface';

@Injectable()
export class RandomMealService {
  constructor(private _http: HttpClient) { }

  public getRandomMeal(): Observable<Recipe> {
    return this._http.get<{ meals: Recipe[] }>("https://www.themealdb.com/api/json/v1/1/random.php").pipe(
      map((res: { meals: Recipe[] }) => res.meals[0])
    );
  }
}
