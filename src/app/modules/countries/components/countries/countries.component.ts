import { Component, OnInit } from '@angular/core';
import { TitleService } from '@shared/services/title.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  constructor(private titleService: TitleService) {
    this.titleService.setTitle('Countries');
  }

  ngOnInit(): void {
  }

}
