/* Place your angular imports here */
import { Injectable } from '@angular/core';

/* Place your RxJs imports here */
import { map, Observable } from "rxjs";

/* Place your service imports here */
import { RecipeService } from "@shared/services/recipe/recipe.service";

@Injectable()
export class MealService extends RecipeService {
  public override getRecipe(meal: string): Observable<any> {
    return super.getRecipe(meal).pipe(
      map(meals => meals.find(ml => ml.strMeal === meal))
    );
  }
}
