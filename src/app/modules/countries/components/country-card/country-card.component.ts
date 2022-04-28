import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryCardComponent implements OnInit {
  @Input() country: { strArea: string };

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navigateToCountryMeals(country: string) {
    this.router.navigateByUrl(`/countries/${country.toLowerCase()}`);
  }
}
