import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { CountriesComponent } from './components/countries/countries.component';
import { CountryCardComponent } from './components/country-card/country-card.component';
import { CountriesListService } from './services/countries-list.service';

const routes = [
  {
    path: '',
    component: CountriesComponent
  }
]

@NgModule({
  declarations: [
    CountriesComponent,
    CountryCardComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    SharedModule
  ],
  exports: [
    RouterModule
  ],
  providers: [CountriesListService]
})
export class CountriesModule { }
