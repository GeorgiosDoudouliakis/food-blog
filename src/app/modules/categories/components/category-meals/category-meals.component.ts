/* Place your angular imports here */
import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

/* Place your service imports here */
import { CategoryMealsService } from "../../services/category-meals/category-meals.service";

/* Place any other imports here */
import { AbstractMealsDirective } from "@shared/modules/meals/abstraction/abstract-meals.directive";
import { MealsType } from "@shared/modules/meals/enums/meals-type.enum";

@Component({
  selector: 'app-category-meals',
  templateUrl: './category-meals.component.html',
  styleUrls: ['./category-meals.component.scss']
})
export class CategoryMealsComponent extends AbstractMealsDirective {
  protected mealsType: MealsType = MealsType.CATEGORY;

  constructor(protected override route: ActivatedRoute, protected service: CategoryMealsService) {
    super(route);
  }
}
