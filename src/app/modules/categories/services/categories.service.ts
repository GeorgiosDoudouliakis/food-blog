/* Place your angular imports here */
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/* Place your RxJs imports here */
import { map, Observable } from 'rxjs';

/* Place your interface imports here */
import { Categories, Category } from '../interfaces/categories.interface';

@Injectable()
export class CategoriesService {
  constructor(private http: HttpClient) { }

  public getCategories(): Observable<Category[]> {
    return this.http.get<Categories>('https://www.themealdb.com/api/json/v1/1/categories.php').pipe(
      map((res: Categories) => res.categories)
    )
  }
}
