/* Place your angular imports here */
import { Component } from '@angular/core';
import { RouterModule } from "@angular/router";

/* Place any other imports here */
import { CloseMenuDirective, ToggleMenuDirective } from "../../directives";

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  imports: [RouterModule, CloseMenuDirective, ToggleMenuDirective]
})
export class HeaderComponent {}
