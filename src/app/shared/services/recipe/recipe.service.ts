import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LoaderService } from "@shared/services/loader/loader.service";
import { concatMap, finalize, Observable, of, pluck, tap } from "rxjs";
import { Recipe } from "../../modules/meal/models/recipe.model";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor(
    private http: HttpClient,
    private loaderService: LoaderService
  ) { }

  getRecipe(meal: string): Observable<Recipe[]> {
    return of(null).pipe(
      tap(() => this.loaderService.loadingState(true)),
      concatMap(() => this.http.get<{ meals: Recipe[] }>(`https://www.themealdb.com/api/json/v1/1/search.php?s=${meal}`)),
      pluck('meals'),
      finalize(() => this.loaderService.loadingState(false))
    )
  }
}
