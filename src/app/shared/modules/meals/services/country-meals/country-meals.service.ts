import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Meal } from '@shared/models/meal.model';
import { LoaderService } from '@shared/services/loader/loader.service';
import { concatMap, finalize, Observable, of, pluck, shareReplay, tap } from 'rxjs';

@Injectable()
export class CountryMealsService {

  constructor(
    private http: HttpClient,
    private loaderService: LoaderService
  ) { }

  getCountryMeals(country: string): Observable<Meal[]> {
    return of(null).pipe(
      tap(() => this.loaderService.loadingState(true)),
      concatMap(() => this.http.get<{ meals: Meal[] }>(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`)),
      pluck('meals'),
      finalize(() => this.loaderService.loadingState(false)),
      shareReplay()
    )
  }
}
