import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MealComponent } from './meal.component';
import { RecipeService } from "@shared/modules/meal/services/recipe.service";

const routes = [
  {
    path: '',
    component: MealComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MealComponent
  ],
  exports: [RouterModule,MealComponent],
  providers: [RecipeService]
})
export class MealModule { }
