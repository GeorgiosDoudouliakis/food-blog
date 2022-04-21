import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoriesService } from './services/categories.service';
import { CategoryComponent } from './components/category/category.component';

const routes = [
  { 
    path: '',
    component: CategoriesComponent
  }
]

@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryComponent
  ],
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ],
  providers: [CategoriesService]
})
export class CategoriesModule { }
