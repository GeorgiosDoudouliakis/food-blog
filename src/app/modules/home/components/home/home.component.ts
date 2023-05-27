/* Place your angular imports here */
import { Component, OnDestroy, OnInit } from '@angular/core';

/* Place your RxJs imports here */
import { Observable, Subscription, tap } from 'rxjs';

/* Place your service imports here */
import { RandomMealService } from '../../services/random-meal.service';
import { Recipe } from '@shared/interfaces/recipe.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  public loading = true;
  public randomMeal: Recipe;
  private _randomMealSub$: Subscription;

  constructor(private _randomMealService: RandomMealService) {}

  public ngOnInit(): void {
    this._randomMealSub$ = this._randomMealService.getRandomMeal().pipe(
      tap((meal: Recipe) => this.randomMeal = meal),
      tap(() => this.loading = false)
    ).subscribe();
  }

  public ngOnDestroy(): void {
    if(this._randomMealSub$) this._randomMealSub$.unsubscribe();
  }
}
