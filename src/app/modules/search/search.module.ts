/* Place your angular imports here */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

/* Place your component imports here */
import { SearchComponent } from './components/search/search.component';
import { LoaderComponent } from "@shared/components/loader/loader.component";

/* Place your service imports here */
import { SearchService } from "./services/search/search.service";

const routes = [
  {
    path: '',
    component: SearchComponent
  },
  {
    path: ':meal',
    loadChildren: () => import('../../shared/modules/meal/meal.module').then(m => m.MealModule)
  }
]

@NgModule({
  declarations: [
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    LoaderComponent
  ],
  providers: [SearchService],
  exports: [RouterModule]
})
export class SearchModule { }
