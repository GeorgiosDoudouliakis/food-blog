/* Place your angular imports here */
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

/* Place your RxJs imports here */
import { filter, map, Observable } from "rxjs";

/* Place your interface imports here */
import { Recipe } from "../../../interfaces/recipe.interface";

@Injectable()
export class MealService {
  constructor(private _http: HttpClient) { }

  public getRecipe(meal: string): Observable<Recipe> {
    return this._http.get<{ meals: Recipe[] }>(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`).pipe(
      map((res: { meals: Recipe[] }) => res.meals),
      map(meals => meals.find(ml => ml.strMeal === meal)),
      filter((meal): meal is Recipe => !!meal)
    )
  }
}
