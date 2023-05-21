/* Place your angular imports here */
import { Component } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

/* Place your service imports here */
import { CountryMealsService } from "../../services/country-meals/country-meals.service";

/* Place any other imports here */
import { AbstractMealsDirective } from "@shared/modules/meals/abstraction/abstract-meals.directive";
import { MealsType } from "@shared/modules/meals/enums/meals-type.enum";

@Component({
  selector: 'app-country-meals',
  templateUrl: './country-meals.component.html',
  styleUrls: ['./country-meals.component.scss']
})
export class CountryMealsComponent extends AbstractMealsDirective {
  protected mealsType: MealsType = MealsType.COUNTRY;

  constructor(protected override route: ActivatedRoute, protected service: CountryMealsService) {
    super(route);
  }
}
