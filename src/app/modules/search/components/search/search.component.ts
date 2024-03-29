/* Place your angular imports here */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

/* Place your RxJs imports here */
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  of,
  Subscription,
  switchMap,
  tap
} from "rxjs";

/* Place your service imports here */
import { SearchService } from "../../services/search/search.service";

/* Place any other imports here */
import { Recipe } from "@shared/interfaces/recipe.interface";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit, OnDestroy {
  public mealForSearch: string = "";
  public meals: Recipe[] = [];
  public loading: boolean = false;
  private _mealsSub$: Subscription;
  private _mealSearchHandler: BehaviorSubject<string> = new BehaviorSubject<string>("");

  constructor(
    private _searchService: SearchService,
    private _router: Router,
    private _route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this._mealsSub$ = this._mealSearchHandler.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap((meal: string) => {
        if(meal) {
          this.loading = true;
          return this._searchService.getMeals(meal)
        }
        return of([]);
      }),
      tap((meals: Recipe[]) => this.meals = meals),
      tap(() => this.loading = false)
    ).subscribe();
  }

  public ngOnDestroy(): void {
    if(this._mealsSub$) this._mealsSub$.unsubscribe();
  }

  public onMealSearch(): void {
    this._mealSearchHandler.next(this.mealForSearch);
  }

  public navigateToMeal(meal: string): void {
    this._router.navigate([meal], { relativeTo: this._route });
  }
}
