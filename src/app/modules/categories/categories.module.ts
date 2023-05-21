/* Place your angular imports here */
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule} from "@angular/common";

/* Place your component imports here */
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { CategoryMealsComponent } from "./components/category-meals/category-meals.component";
import { LoaderComponent } from "@shared/components/loader/loader.component";

/* Place your module imports here */
import { MealsModule } from "@shared/modules/meals/meals.module";

/* Place your service imports here */
import { CategoriesService } from './services/categories/categories.service';
import { CategoryMealsService } from "./services/category-meals/category-meals.service";

const routes = [
  {
    path: '',
    component: CategoriesComponent
  },
  {
    path: ':category',
    component: CategoryMealsComponent
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
    CategoryCardComponent,
    CategoryMealsComponent
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    MealsModule,
    LoaderComponent
  ],
  exports: [
    RouterModule
  ],
  providers: [CategoriesService, CategoryMealsService]
})
export class CategoriesModule { }
