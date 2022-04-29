import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { MealsModule } from '@shared/modules/meals/meals.module';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoriesService } from './services/categories.service';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { MealsComponent } from '@shared/modules/meals/components/meals/meals.component';

const routes = [
  {
    path: '',
    component: CategoriesComponent
  },
  {
    path: ':category',
    component: MealsComponent,
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
    SharedModule,
    RouterModule.forChild(routes),
    MealsModule
  ],
  exports: [
    RouterModule
  ],
  providers: [CategoriesService]
})
export class CategoriesModule { }
