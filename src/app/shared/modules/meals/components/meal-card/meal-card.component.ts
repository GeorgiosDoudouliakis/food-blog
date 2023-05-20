/* Place your angular imports here */
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

/* Place your interface imports here */
import { Meal } from '../../interfaces/meal.interface';

@Component({
  selector: 'app-meal-card',
  templateUrl: './meal-card.component.html',
  styleUrls: ['./meal-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MealCardComponent {
  @Input() public meal: Meal;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  public navigateToMeal(meal: string): void {
    this._router.navigate([meal], { relativeTo: this._route });
  }
}
