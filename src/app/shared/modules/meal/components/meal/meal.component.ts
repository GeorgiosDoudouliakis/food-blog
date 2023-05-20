/* Place your angular imports here */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

/* Place your RxJs imports here */
import { Subscription, tap } from "rxjs";

/* Place your service imports here */
import { MealService } from "@shared/modules/meal/services/meal.service";

/* Place any other imports here */
import { Recipe } from "@shared/modules/meal/models/recipe.model";

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss'],
  providers: [
    {
      provide: Window,
      useValue: window
    }
  ]
})
export class MealComponent implements OnInit, OnDestroy {
  public isOnMobile: boolean;
  public meal: string;
  public recipe: Recipe;
  public ingredients: (string | null)[] = [];
  public measures: (string | null)[] = [];
  public loading: boolean = true;
  private _recipeSub$: Subscription;

  constructor(
    private _window: Window,
    private _route: ActivatedRoute,
    private _mealService: MealService
  ) { }

  public ngOnInit(): void {
    this.isOnMobile = this._window.matchMedia('(max-width: 767px)').matches;

    this.meal = this._route.snapshot.params['meal'];

    this._recipeSub$ = this._mealService.getRecipe(this.meal).pipe(
      tap((recipe: any) => {
        this.recipe = recipe;

        for(let i = 1; i <= 20; i++) {
          if(recipe[`strIngredient${i}`] && recipe[`strMeasure${i}`]) {
            this.ingredients.push(recipe[`strIngredient${i}`]);
            this.measures.push(recipe[`strMeasure${i}`]);
          }
        }
      }),
      tap(() => this.loading = false)
    ).subscribe();
  }

  public ngOnDestroy(): void {
    if(this._recipeSub$) this._recipeSub$.unsubscribe();
  }
}
