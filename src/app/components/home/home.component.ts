/* Place your angular imports here */
import { Component } from '@angular/core';

/* Place your module imports here */
import { RouterModule } from "@angular/router";

/* Place your service imports here */
import { TitleService } from '@shared/services/title/title.service';

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [RouterModule]
})
export class HomeComponent {
  constructor(private _titleService: TitleService) {
    this._titleService.setTitle();
  }
}
