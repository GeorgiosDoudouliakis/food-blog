/* Place your angular imports here */
import { Directive } from '@angular/core';
import { HttpClient } from "@angular/common/http";

/* Place your RxJs imports here */
import { Observable } from "rxjs";

/* Place your interface imports here */
import { Meal } from "@shared/modules/meals/interfaces/meal.interface";
import { MealsService } from "@shared/modules/meals/interfaces/meals-service.interface";

@Directive()
export abstract class AbstractMealsServiceDirective implements MealsService {
  public abstract getMeals(searchTerm: string): Observable<Meal[]>;

  constructor(protected http: HttpClient) {}
}
