/* Place your angular imports here */
import { Component, OnInit, Injector, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

/* Place your RxJs imports here */
import { Subscription, tap } from 'rxjs';

/* Place your service imports here */
import { CategoryMealsService } from '../../services/category-meals/category-meals.service';
import { CountryMealsService } from '../../services/country-meals/country-meals.service';

/* Place your interface imports here */
import { Meal } from '../../interfaces/meal.interface';

/* Place any other imports here */
import { uppercaseFirstLetter } from '@shared/modules/meals/helpers/uppercase-first-letter.helper';

@Component({
  selector: 'app-meals',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss']
})
export class MealsComponent implements OnInit, OnDestroy {
  public meals: Meal[] = [];
  public loading: boolean = true;
  private _service: CategoryMealsService | CountryMealsService;
  private _mealsSub$: Subscription;

  constructor(
    public route: ActivatedRoute,
    private _injector: Injector
  ) {
    if(this.route.snapshot.data['type'] === 'category') {
      this._service = this._injector.get(CategoryMealsService);
    } else {
      this._service = this._injector.get(CountryMealsService);
    }
  }

  public ngOnInit(): void {
    this.getMeals();
  }

  public ngOnDestroy(): void {
    if(this._mealsSub$) this._mealsSub$.unsubscribe();
  }

  get title(): string {
    const type = this.route.snapshot.data['type'];
    return this.route.snapshot.params[type];
  }

  private getMeals(): void {
    if(this._service instanceof CategoryMealsService) {
      this._mealsSub$ = this._service.getCategoryMeals(uppercaseFirstLetter(this.title)).pipe(
        tap((meals: Meal[]) => this.meals = meals),
        tap(() => this.loading = false)
      ).subscribe();
    } else if(this._service instanceof CountryMealsService) {
      this._mealsSub$ = this._service.getCountryMeals(uppercaseFirstLetter(this.title)).pipe(
        tap((meals: Meal[]) => this.meals = meals),
        tap(() => this.loading = false)
      ).subscribe();
    }
  }
}
