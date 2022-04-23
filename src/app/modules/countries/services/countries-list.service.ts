import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoaderService } from '@shared/services/loader/loader.service';
import { concatMap, finalize, Observable, of, pluck, shareReplay, tap } from 'rxjs';

@Injectable()
export class CountriesListService {

  constructor(
    private http: HttpClient,
    private loaderService: LoaderService
  ) { }

  getCountriesList(): Observable<{ strArea: string}[]> {
    return of(null).pipe(
      tap(() => this.loaderService.loadingState(true)),
      concatMap(() => this.http.get<{ meals: { strArea: string }[] }>('https://www.themealdb.com/api/json/v1/1/list.php?a=list')),
      pluck('meals'),
      finalize(() => this.loaderService.loadingState(false)),
      shareReplay()
    )
  }
}
