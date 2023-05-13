/* Place your angular imports here */
import { Component, OnDestroy, OnInit } from '@angular/core';

/* Place your RxJs imports here */
import {Subscription, tap} from 'rxjs';

/* Place your service imports here */
import { TitleService } from '@shared/services/title/title.service';
import { CountriesListService } from '../../services/countries-list.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit, OnDestroy {
  public countries: { strArea: string }[] = [];
  public loading: boolean = true;
  private _countriesSub$: Subscription;

  constructor(
    private titleService: TitleService,
    private countriesListService: CountriesListService
  ) {
    this.titleService.setTitle('Countries');
  }

  public ngOnInit(): void {
    this._countriesSub$ = this.countriesListService.getCountriesList().pipe(
      tap((countries: { strArea: string }[]) => this.countries = countries),
      tap(() => this.loading = false)
    ).subscribe();
  }

  public ngOnDestroy(): void {
    if(this._countriesSub$) this._countriesSub$.unsubscribe();
  }
}
