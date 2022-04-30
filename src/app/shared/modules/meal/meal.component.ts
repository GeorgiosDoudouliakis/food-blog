import { Component, OnInit } from '@angular/core';
import { RecipeService } from "@shared/modules/meal/services/recipe.service";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { Recipe } from "@shared/modules/meal/models/recipe.model";

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit {
  recipe$: Observable<Recipe>;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    const meal = this.route.snapshot.params['meal'];
    this.recipe$ = this.recipeService.getRecipe(meal);
  }
}
