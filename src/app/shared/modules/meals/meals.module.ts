import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { MealsComponent } from './components/meals/meals.component';
import { MealCardComponent } from './components/meal-card/meal-card.component';
import { CategoryMealsService } from './services/category-meals/category-meals.service';
import { CountryMealsService } from './services/country-meals/country-meals.service';

const routes = [
  {
    path: '',
    component: MealsComponent
  }
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  declarations: [
    MealsComponent,
    MealCardComponent
  ],
  exports: [
    RouterModule,
    MealsComponent,
    MealCardComponent
  ],
  providers: [
    CategoryMealsService,
    CountryMealsService
  ]
})
export class MealsModule { }
