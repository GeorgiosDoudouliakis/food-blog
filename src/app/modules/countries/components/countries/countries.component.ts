import { Component, OnInit } from '@angular/core';
import { TitleService } from '@shared/services/title/title.service';
import { Observable } from 'rxjs';
import { CountriesListService } from '../../services/countries-list.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {
  countries$: Observable<{ strArea: string }[]>;

  constructor(
    private titleService: TitleService,
    private countriesListService: CountriesListService
  ) {
    this.titleService.setTitle('Countries');
  }

  ngOnInit(): void {
    this.countries$ = this.countriesListService.getCountriesList();
  }
}
