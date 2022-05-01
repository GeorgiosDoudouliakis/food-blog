import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MealComponent } from './meal.component';
import { RecipeService } from "@shared/modules/meal/services/recipe.service";
import { ImgDownloadDirective } from './directives/img-download.directive';

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
    MealComponent,
    ImgDownloadDirective
  ],
  exports: [RouterModule,MealComponent,ImgDownloadDirective],
  providers: [RecipeService]
})
export class MealModule { }
