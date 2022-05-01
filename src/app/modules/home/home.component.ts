import { Component } from '@angular/core';
import { TitleService } from '@shared/services/title/title.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  constructor(private titleService: TitleService) {
    this.titleService.setTitle();
  }
}
