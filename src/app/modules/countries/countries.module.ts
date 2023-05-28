/* Place your angular imports here */
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';

/* Place your component imports here */
import { CountriesComponent } from './components/countries/countries.component';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { CountryMealsComponent } from "./components/country-meals/country-meals.component";
import { LoaderComponent } from "@shared/components/loader/loader.component";

/* Place your module imports here */
import { MealsModule } from "@shared/modules/meals/meals.module";

/* Place your service imports here */
import { CountriesListService } from './services/countries-list/countries-list.service';
import { CountryMealsService } from "./services/country-meals/country-meals.service";

/* Place any other imports here */
import { CardHoverDirective } from './directives/card-hover.directive';

const routes = [
  {
    path: '',
    component: CountriesComponent
  },
  {
    path: ':country',
    component: CountryMealsComponent
  },
  {
    path: ':country/:meal',
    loadChildren: () => import('../../shared/modules/meal/meal.module').then(({ MealModule }) => MealModule)
  }
];

@NgModule({
  declarations: [
    CountriesComponent,
    CountryCardComponent,
    CountryMealsComponent,
    CardHoverDirective
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MealsModule,
    LoaderComponent
  ],
  exports: [
    RouterModule
  ],
  providers: [CountriesListService, CountryMealsService]
})
export class CountriesModule { }
