import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-country-card',
  templateUrl: './country-card.component.html',
  styleUrls: ['./country-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CountryCardComponent {
  @Input() country: { strArea: string };

  constructor(private router: Router) { }

  navigateToCountryMeals(country: string) {
    this.router.navigateByUrl(`/countries/${country.toLowerCase()}`);
  }
}
