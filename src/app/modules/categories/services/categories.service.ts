import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { concatMap, finalize, pluck, shareReplay, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { Categories, Category } from '../models/categories.model';
import { LoaderService } from '@shared/services/loader/loader.service';

@Injectable()
export class CategoriesService {

  constructor(
    private http: HttpClient,
    private loaderService: LoaderService
  ) { }

  getCategories(): Observable<Category[]> {
    return of(null).pipe(
      tap(() => this.loaderService.loadingState(true)),
      concatMap(() => this.http.get<Categories>('https://www.themealdb.com/api/json/v1/1/categories.php')),
      pluck('categories'),
      finalize(() => this.loaderService.loadingState(false)),
      shareReplay()
    )
  }
}