/* Place your angular imports here */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

/* Place your RxJs imports here */
import { Subscription, tap } from "rxjs";

/* Place your service imports here */
import { MealService } from "@shared/modules/meal/services/meal.service";

/* Place your interface imports here */
import { Recipe } from "../../../../interfaces/recipe.interface";

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit, OnDestroy {
  public meal: string;
  public recipe: Recipe;
  public ingredients: string[] = [];
  public measures: string[] = [];
  public loading: boolean = true;
  private _recipeSub$: Subscription;

  constructor(
    private _route: ActivatedRoute,
    private _mealService: MealService
  ) { }

  public ngOnInit(): void {
    this.meal = this._route.snapshot.params['meal'];

    this._recipeSub$ = this._mealService.getRecipe(this.meal).pipe(
      tap((recipe: Recipe) => {
        this.recipe = recipe;

        for(let i = 1; i <= 20; i++) {
          if(recipe[`strIngredient${i}` as keyof Recipe] && recipe[`strMeasure${i}` as keyof Recipe]) {
            this.ingredients.push(recipe[`strIngredient${i}` as keyof Recipe]);
            this.measures.push(recipe[`strMeasure${i}` as keyof Recipe]);
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
