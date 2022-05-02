import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { MealComponent } from './meal.component';
import { ImgDownloadDirective } from './directives/img-download.directive';
import { MealService } from "@shared/modules/meal/services/meal.service";

const routes = [
  {
    path: '',
    component: MealComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    MealComponent,
    ImgDownloadDirective
  ],
  providers: [MealService],
  exports: [RouterModule,MealComponent,ImgDownloadDirective]
})
export class MealModule { }
