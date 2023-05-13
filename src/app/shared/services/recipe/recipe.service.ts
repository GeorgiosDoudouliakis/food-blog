/* Place your angular imports here */
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

/* Place your RxJs imports here */
import { concatMap, Observable, of, pluck } from "rxjs";

/* Place any other imports here */
import { Recipe } from "../../modules/meal/models/recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  constructor(private http: HttpClient) { }

  public getRecipe(meal: string): Observable<Recipe[]> {
    return of(null).pipe(
      concatMap(() => this.http.get<{ meals: Recipe[] }>(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)),
      pluck('meals')
    )
  }
}
