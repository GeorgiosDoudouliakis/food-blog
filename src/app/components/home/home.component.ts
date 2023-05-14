/* Place your angular imports here */
import { Component } from '@angular/core';

/* Place your module imports here */
import { RouterModule } from "@angular/router";

@Component({
  standalone: true,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [RouterModule]
})
export class HomeComponent {}
