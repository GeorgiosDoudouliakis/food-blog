import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from '@shared/shared.module';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoriesService } from './services/categories.service';
import { CategoryCardComponent } from './components/category-card/category-card.component';

const routes = [
  { 
    path: '',
    component: CategoriesComponent
  }
]

@NgModule({
  declarations: [
    CategoriesComponent,
    CategoryCardComponent
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
