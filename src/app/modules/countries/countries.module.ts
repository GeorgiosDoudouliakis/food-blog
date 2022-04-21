import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CountriesComponent } from './components/countries/countries.component';

const routes = [
  {
    path: '',
    component: CountriesComponent
  }
]

@NgModule({
  declarations: [
    CountriesComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CountriesModule { }
