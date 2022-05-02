import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { CountriesComponent } from './components/countries/countries.component';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { CountriesListService } from './services/countries-list.service';
import { CardHoverDirective } from './directives/card-hover.directive';

const routes = [
  {
    path: '',
    component: CountriesComponent
  },
  {
    path: ':country',
    loadChildren: () => import('../../shared/modules/meals/meals.module').then(m => m.MealsModule),
    data: {
      type: 'country'
    }
  },
  {
    path: ':country/:meal',
    loadChildren: () => import('../../shared/modules/meal/meal.module').then(m => m.MealModule),
    data: {
      type: 'countries'
    }
  }
]

@NgModule({
  declarations: [
    CountriesComponent,
    CountryCardComponent,
    CardHoverDirective
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  providers: [CountriesListService]
})
export class CountriesModule { }
