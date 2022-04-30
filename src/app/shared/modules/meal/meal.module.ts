import { NgModule } from '@angular/core';
import { RouterModule} from "@angular/router";
import { MealComponent } from './meal.component';
import { RecipeService } from "@shared/modules/meal/services/recipe.service";

const routes = [
  {
    path: '',
    component: MealComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [
    MealComponent
  ],
  exports: [RouterModule,MealComponent],
  providers: [RecipeService]
})
export class MealModule { }
