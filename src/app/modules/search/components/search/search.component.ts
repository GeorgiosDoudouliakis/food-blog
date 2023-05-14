/* Place your angular imports here */
import { Component, OnDestroy, OnInit } from '@angular/core';

/* Place your RxJs imports here */
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  of,
  Subscription,
  switchMap,
  tap
} from "rxjs";

/* Place your service imports here */
import { RecipeService } from "@shared/services/recipe/recipe.service";

/* Place any other imports here */
import { Recipe } from "@shared/modules/meal/models/recipe.model";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  public mealForSearch: string = "";
  public meals: Recipe[] = [];
  public loading: boolean = false;
  private _mealsSub$: Subscription;
  private _mealSearchHandler: BehaviorSubject<string> = new BehaviorSubject<string>("");

  constructor(private recipeService: RecipeService) {}

  public ngOnInit(): void {
    this._mealsSub$ = this._mealSearchHandler.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((meal: string) => {
        if(meal) {
          this.loading = true;
          return this.recipeService.getRecipe(meal)
        }
        return of([]);
      }),
      tap((meals: Recipe[]) => this.meals = meals),
      tap(() => this.loading = false)
    ).subscribe();
  }

  public ngOnDestroy(): void {
    if(this._mealsSub$) this._mealsSub$.unsubscribe();
  }

  public onMealSearch(): void {
    this._mealSearchHandler.next(this.mealForSearch);
  }
}
