/* Place your angular imports here */
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

/* Place your component imports here */
import { MealsComponent } from './components/meals/meals.component';
import { MealCardComponent } from './components/meal-card/meal-card.component';
import { LoaderComponent } from "@shared/components/loader/loader.component";

/* Place your service imports here */
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
    CommonModule,
    LoaderComponent
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
