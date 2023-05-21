/* Place your angular imports here */
import { Injectable } from '@angular/core';

/* Place your RxJs imports here */
import { map, Observable } from 'rxjs';

/* Place your interface imports here */
import { Meal } from '@shared/modules/meals/interfaces/meal.interface';

/* Place any other imports here */
import { AbstractMealsServiceDirective } from "@shared/modules/meals/abstraction/abstract-meals-service.directive";

@Injectable()
export class CategoryMealsService extends AbstractMealsServiceDirective {
  public getMeals(searchTerm: string): Observable<Meal[]> {
    return this.http.get<{ meals: Meal[] }>(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${searchTerm}`).pipe(
      map((res: { meals: Meal[] }) => res.meals)
    )
  }
}
