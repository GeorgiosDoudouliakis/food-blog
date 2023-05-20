/* Place your angular imports here */
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

/* Place your RxJs imports here */
import { map, Observable } from "rxjs";

/* Place any other imports here */
import { Recipe } from "../../modules/meal/models/recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private _http: HttpClient) { }

  public getRecipe(meal: string): Observable<Recipe[]> {
    return this._http.get<{ meals: Recipe[] }>(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`).pipe(
      map((res: { meals: Recipe[] }) => res.meals)
    )
  }
}
