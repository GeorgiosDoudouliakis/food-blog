/* Place your angular imports here */
import { Component, OnDestroy, OnInit } from '@angular/core';

/* Place your RxJs imports here */
import { Subscription, tap } from 'rxjs';

/* Place your service imports here */
import { CategoriesService } from '../../services/categories.service';

/* Place any other imports here */
import { Category } from '../../models/categories.model';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit, OnDestroy {
  public categories: Category[] = [];
  public loading: boolean = true;
  private _categoriesSub$: Subscription;

  constructor(private categoriesService: CategoriesService) {}

  public ngOnInit(): void {
    this._categoriesSub$ = this.categoriesService.getCategories().pipe(
      tap((categories: Category[]) => this.categories = categories),
      tap(() => this.loading = false)
    ).subscribe();
  }

  public ngOnDestroy(): void {
    if(this._categoriesSub$) this._categoriesSub$.unsubscribe();
  }
}
