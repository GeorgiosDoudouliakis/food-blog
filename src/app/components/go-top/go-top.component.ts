/* Place your angular imports here */
import { Component } from '@angular/core';

/* Place your directive imports here */
import { GoTopVisibilityDirective } from "../../directives";

@Component({
  standalone: true,
  selector: 'app-go-top',
  templateUrl: './go-top.component.html',
  styleUrls: ['./go-top.component.scss'],
  imports: [GoTopVisibilityDirective]
})
export class GoTopComponent {}
