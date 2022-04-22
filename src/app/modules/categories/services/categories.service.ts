import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { finalize, pluck, shareReplay } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Categories, Category } from '../models/categories.model';
import { LoaderService } from '@shared/services/loader/loader.service';

@Injectable()
export class CategoriesService {

  constructor(
    private http: HttpClient,
    private loaderService: LoaderService
  ) { }

  getCategories(): Observable<Category[]> {
    this.loaderService.loadingState(true);
    return this.http.get<Categories>('https://www.themealdb.com/api/json/v1/1/categories.php')
                .pipe(
                  pluck('categories'),
                  finalize(() => this.loaderService.loadingState(false)),
                  shareReplay()
                );
  }
}
