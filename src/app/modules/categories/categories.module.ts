/* Place your angular imports here */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule} from "@angular/common";

/* Place your component imports here */
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { LoaderComponent } from "@shared/components/loader/loader.component";

/* Place your service imports here */
import { CategoriesService } from './services/categories.service';

const routes = [
  {
    path: '',
    component: CategoriesComponent
  },
  {
    path: ':category',
    loadChildren: () => import('../../shared/modules/meals/meals.module').then(m => m.MealsModule),
    data: {
      type: 'category'
    }
  },
  {
    path: ':country/:meal',
    loadChildren: () => import('../../shared/modules/meal/meal.module').then(m => m.MealModule),
    data: {
      type: 'categories'
    }
  }
];

@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryCardComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    LoaderComponent
  ],
  exports: [
    RouterModule
  ],
  providers: [CategoriesService]
})
export class CategoriesModule { }
