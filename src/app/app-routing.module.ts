/* Place your angular imports here */
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    title: 'Food Blog',
    loadComponent: () => import('./components/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'categories',
    title: 'Food Blog | Categories',
    loadChildren: () => import('./modules/categories/categories.module').then(m => m.CategoriesModule)
  },
  {
    path: 'countries',
    title: 'Food Blog | Countries',
    loadChildren: () => import('./modules/countries/countries.module').then(m => m.CountriesModule)
  },
  {
    path: 'search',
    title: 'Food Blog | Search',
    loadChildren: () => import('./modules/search/search.module').then(m => m.SearchModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
