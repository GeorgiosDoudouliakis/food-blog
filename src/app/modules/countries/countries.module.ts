import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { MealsModule } from '@shared/modules/meals/meals.module';
import { CountriesComponent } from './components/countries/countries.component';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { CountriesListService } from './services/countries-list.service';
import { CardHoverDirective } from './directives/card-hover.directive';
import { MealsComponent } from '@shared/modules/meals/components/meals/meals.component';

const routes = [
  {
    path: '',
    component: CountriesComponent
  },
  {
    path: ':country/meals',
    component: MealsComponent,
    data: {
      type: 'country'
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
    SharedModule,
    MealsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [CountriesListService]
})
export class CountriesModule { }
