import {ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Meal } from '@shared/models/meal.model';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-meal-card',
  templateUrl: './meal-card.component.html',
  styleUrls: ['./meal-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MealCardComponent {
  @Input() meal: Meal;

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) { }

  navigateToMeal(meal: string): void {
    this.router.navigate([meal], { relativeTo: this.route });
  }
}
