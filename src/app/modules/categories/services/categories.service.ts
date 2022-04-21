import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Categories, Category } from '../models/categories.model';

@Injectable()
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Categories>('https://www.themealdb.com/api/json/v1/1/categories.php')
                .pipe(
                  pluck('categories'),
                  shareReplay()
                );
  }
}
