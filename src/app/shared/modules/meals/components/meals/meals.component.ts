import { Component, Input, OnInit, Injector } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CategoryMealsService } from '../../services/category-meals/category-meals.service';
import { CountryMealsService } from '../../services/country-meals/country-meals.service';
import { Meal } from '@shared/models/meal.model';
import { uppercaseFirstLetter } from '@shared/helpers/uppercase-first-letter.helper';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss']
})
export class MealsComponent implements OnInit {
  service: CategoryMealsService | CountryMealsService;
  meals$: Observable<Meal[]>;

  constructor(
    public route: ActivatedRoute,
    private injector: Injector
  ) {
    if(this.route.snapshot.data['type'] === 'category') {
      this.service = this.injector.get(CategoryMealsService);
    } else {
      this.service = this.injector.get(CountryMealsService);
    }
  }

  ngOnInit(): void {
    this.getMeals();
  }

  get title(): string {
    const type = this.route.snapshot.data['type'];
    return this.route.snapshot.params[type];
  }

  private getMeals() {
    if(this.service instanceof CategoryMealsService) {
      this.meals$ = this.service.getCategoryMeals(uppercaseFirstLetter(this.title));
    } else if(this.service instanceof CountryMealsService) {
      this.meals$ = this.service.getCountryMeals(uppercaseFirstLetter(this.title));
    }
  }
}
