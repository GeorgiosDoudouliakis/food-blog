/* Place your angular imports here */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/* Place your RxJs imports here */
import { concatMap, pluck } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

/* Place any other imports here */
import { Categories, Category } from '../models/categories.model';

@Injectable()
export class CategoriesService {
  constructor(private http: HttpClient) { }

  public getCategories(): Observable<Category[]> {
    return of(null).pipe(
      concatMap(() => this.http.get<Categories>('https://www.themealdb.com/api/json/v1/1/categories.php')),
      pluck('categories')
    )
  }
}
