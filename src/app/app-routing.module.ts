/* Place your angular imports here */
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    title: 'Food Blog',
    loadChildren: () => import('./modules/home/home.module').then(({ HomeModule }) => HomeModule)
  },
  {
    path: 'categories',
    title: 'Food Blog | Categories',
    loadChildren: () => import('./modules/categories/categories.module').then(({ CategoriesModule }) => CategoriesModule)
  },
  {
    path: 'countries',
    title: 'Food Blog | Countries',
    loadChildren: () => import('./modules/countries/countries.module').then(({ CountriesModule }) => CountriesModule)
  },
  {
    path: 'search',
    title: 'Food Blog | Search',
    loadChildren: () => import('./modules/search/search.module').then(({ SearchModule }) => SearchModule)
  },
  {
    path: 'meals/:meal',
    loadChildren: () => import('./shared/modules/meal/meal.module').then(({ MealModule }) => MealModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
