/* Place your angular imports here */
import { Component, Input } from '@angular/core';

/* Place your interface imports here */
import { Meal } from "@shared/modules/meals/interfaces/meal.interface";

@Component({
  selector: 'app-meals[meals][loading][title]',
  templateUrl: './meals.component.html',
  styleUrls: ['./meals.component.scss']
})
export class MealsComponent {
  @Input() public meals: Meal[] = [];
  @Input() public loading: boolean;
  @Input() public title: string;
}
