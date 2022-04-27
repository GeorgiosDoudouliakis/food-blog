import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Meal } from '@shared/models/meal.model';

@Component({
  selector: 'app-meal-card',
  templateUrl: './meal-card.component.html',
  styleUrls: ['./meal-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MealCardComponent implements OnInit {
  @Input() meal: Meal;

  constructor() { }

  ngOnInit(): void {
  }

}
