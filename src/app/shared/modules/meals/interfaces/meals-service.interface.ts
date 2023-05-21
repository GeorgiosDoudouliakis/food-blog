/* Place your RxJs imports here */
import { Observable } from "rxjs";

/* Place your interface imports here */
import { Meal } from "@shared/modules/meals/interfaces/meal.interface";

export interface MealsService {
  getMeals: (searchTerm: string) => Observable<Meal[]>
}
