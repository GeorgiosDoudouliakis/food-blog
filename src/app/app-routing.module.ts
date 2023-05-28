/* Place your angular imports here */
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes, TitleStrategy } from '@angular/router';

/* Place your service imports here */
import { CustomTitleStrategyService } from "./services/custom-title-strategy.service";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home/home.module').then(({ HomeModule }) => HomeModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./modules/categories/categories.module').then(({ CategoriesModule }) => CategoriesModule)
  },
  {
    path: 'countries',
    loadChildren: () => import('./modules/countries/countries.module').then(({ CountriesModule }) => CountriesModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./modules/search/search.module').then(({ SearchModule }) => SearchModule)
  },
  {
    path: 'meals/:meal',
    loadChildren: () => import('./shared/modules/meal/meal.module').then(({ MealModule }) => MealModule)
  },
  {
    path: '**',
    loadComponent: () => import('./components/404/not-found.component').then(({ NotFoundComponent }) => NotFoundComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule],
  providers: [
    {
      provide: TitleStrategy,
      useClass: CustomTitleStrategyService
    }
  ]
})
export class AppRoutingModule { }
