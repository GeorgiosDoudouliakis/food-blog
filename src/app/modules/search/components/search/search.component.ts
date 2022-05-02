import { Component, OnDestroy } from '@angular/core';
import {debounceTime, distinctUntilChanged, distinctUntilKeyChanged, Subscription} from "rxjs";
import { Recipe } from "@shared/modules/meal/models/recipe.model";
import { RecipeService } from "@shared/services/recipe/recipe.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnDestroy {
  searchedMeals: Recipe[] = [];
  mealsSub$: Subscription;

  constructor(private recipeService: RecipeService) { }

  ngOnDestroy() {
    if(this.mealsSub$) this.mealsSub$.unsubscribe();
  }

  onSearch(value: string) {
    if(value) {
      this.mealsSub$ = this.recipeService.getRecipe(value)
        .subscribe((meals: Recipe[]) => this.searchedMeals = meals);
    } else {
      this.searchedMeals = [];
    }
  }
}
