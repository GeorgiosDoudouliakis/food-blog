/* Place your angular imports here */
import { Directive, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

/* Place your RxJs imports here */
import {Subscription, tap} from "rxjs";

/* Place your interface imports here */
import { Meal } from "@shared/modules/meals/interfaces/meal.interface";

/* Place any other imports here */
import { MealsType } from "@shared/modules/meals/enums/meals-type.enum";
import { AbstractMealsServiceDirective } from "@shared/modules/meals/abstraction/abstract-meals-service.directive";
import { uppercaseFirstLetter } from "@shared/helpers/uppercase-first-letter.helper";

@Directive()
export abstract class AbstractMealsDirective implements OnInit, OnDestroy {
  public meals: Meal[] = [];
  public loading: boolean = true;
  public get title(): string {
    return this.route.snapshot.params[this.mealsType];
  }

  private _mealsSub$: Subscription;

  protected abstract service: AbstractMealsServiceDirective;
  protected abstract mealsType: MealsType;

  constructor(protected route: ActivatedRoute) {}

  public ngOnInit(): void {
    this._mealsSub$ = this.service.getMeals(uppercaseFirstLetter(this.title)).pipe(
      tap((meals: Meal[]) => this.meals = meals),
      tap(() => this.loading = false)
    ).subscribe();
  }

  public ngOnDestroy(): void {
    if(this._mealsSub$) this._mealsSub$.unsubscribe();
  }
}
