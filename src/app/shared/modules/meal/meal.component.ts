import { Component, OnDestroy, OnInit} from '@angular/core';
import { RecipeService } from "@shared/modules/meal/services/recipe.service";
import { ActivatedRoute } from "@angular/router";
import { Recipe } from "@shared/modules/meal/models/recipe.model";
import { Subscription } from "rxjs";

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.scss']
})
export class MealComponent implements OnInit, OnDestroy {
  recipe: Recipe;
  ingredients: (string | null)[] = [];
  measures: (string | null)[] = [];
  private recipeSub$: Subscription;

  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) { }

  ngOnInit(): void {
    const meal = this.route.snapshot.params['meal'];

    this.recipeSub$ = this.recipeService.getRecipe(meal).subscribe((recipe: any) => {
      this.recipe = recipe;

      for(let i = 1; i <= 20; i++) {
        if(recipe[`strIngredient${i}`] && recipe[`strMeasure${i}`]) {
          this.ingredients.push(recipe[`strIngredient${i}`]);
          this.measures.push(recipe[`strMeasure${i}`]);
        }
      }
    });
  }

  ngOnDestroy() {
    if(this.recipeSub$) this.recipeSub$.unsubscribe();
  }
}
