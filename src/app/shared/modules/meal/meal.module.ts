/* Place your angular imports here */
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

/* Place your component imports here */
import { MealComponent } from './components/meal/meal.component';
import { LoaderComponent } from "@shared/components/loader/loader.component";

/* Place your service imports here */
import { MealService } from "@shared/modules/meal/services/meal.service";

/* Place any other imports here */
import { ImgDownloadDirective } from './directives/img-download.directive';
import { ConvertTagsToArrayPipe } from "@shared/modules/meal/pipes/convert-tags-to-array.pipe";

const routes = [
  {
    path: '',
    component: MealComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LoaderComponent
  ],
  declarations: [
    MealComponent,
    ImgDownloadDirective,
    ConvertTagsToArrayPipe
  ],
  providers: [MealService],
  exports: [RouterModule,MealComponent,ImgDownloadDirective]
})
export class MealModule { }
