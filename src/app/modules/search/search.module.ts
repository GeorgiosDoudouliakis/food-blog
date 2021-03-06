import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { SearchComponent } from './components/search/search.component';

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
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SearchModule { }
