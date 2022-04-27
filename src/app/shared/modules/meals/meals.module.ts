import { NgModule } from '@angular/core';
import { SharedModule } from '@shared/shared.module';
import { MealsComponent } from './components/meals/meals.component';
import { MealCardComponent } from './components/meal-card/meal-card.component';
import { CategoryMealsService } from './services/category-meals/category-meals.service';
import { CountryMealsService } from './services/country-meals/country-meals.service';

@NgModule({
  imports: [SharedModule],
  declarations: [
    MealsComponent,
    MealCardComponent
  ],
  exports: [MealsComponent, MealCardComponent],
  providers: [
    CategoryMealsService,
    CountryMealsService
  ]
})
export class MealsModule { }
