import { NgModule } from '@angular/core';
import { RouterModule} from "@angular/router";
import { MealComponent } from './meal.component';

const routes = [
  {
    path: '',
    component: MealComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [
    MealComponent
  ],
  exports: [RouterModule,MealComponent]
})
export class MealModule { }
