/* Place your angular imports here */
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

/* Place your component imports here */
import { MealsComponent } from './components/meals/meals.component';
import { MealCardComponent } from './components/meal-card/meal-card.component';
import { LoaderComponent } from "@shared/components/loader/loader.component";

@NgModule({
  imports: [
    CommonModule,
    LoaderComponent
  ],
  declarations: [
    MealsComponent,
    MealCardComponent
  ],
  exports: [MealsComponent]
})
export class MealsModule { }
