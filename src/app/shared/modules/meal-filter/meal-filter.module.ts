import { NgModule } from '@angular/core';
import { MealFilterComponent } from './meal-filter.component';

@NgModule({
  declarations: [
    MealFilterComponent
  ],
  exports: [MealFilterComponent]
})
export class MealFilterModule { }
