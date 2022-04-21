import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';

const routes = [
  { 
    path: '',
    component: CategoriesComponent
  }
]

@NgModule({
  declarations: [
    CategoriesComponent
  ],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CategoriesModule { }
