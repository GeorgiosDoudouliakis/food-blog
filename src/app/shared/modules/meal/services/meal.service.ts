import { Injectable } from '@angular/core';
import { RecipeService } from "@shared/services/recipe/recipe.service";
import { map, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { LoaderService } from "@shared/services/loader/loader.service";

@Injectable()
export class MealService extends RecipeService {

  constructor(http: HttpClient, loaderService: LoaderService) {
    super(http, loaderService);
  }

  override getRecipe(meal: string): Observable<any> {
    return super.getRecipe(meal).pipe(
      map(meals => meals.find(ml => ml.strMeal === meal))
    );
  }
}
