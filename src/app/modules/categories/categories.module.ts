import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule} from "@angular/common";
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoriesService } from './services/categories.service';
import { CategoryCardComponent } from './components/category-card/category-card.component';

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
    CommonModule
  ],
  exports: [
    RouterModule
  ],
  providers: [CategoriesService]
})
export class CategoriesModule { }
