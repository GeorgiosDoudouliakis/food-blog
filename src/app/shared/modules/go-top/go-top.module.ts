import { NgModule } from '@angular/core';
import { GoTopComponent } from './go-top.component';
import { GoTopVisibilityDirective } from './directives/go-top-visibility.directive';

@NgModule({
  declarations: [
    GoTopComponent,
    GoTopVisibilityDirective
  ],
  exports: [
    GoTopComponent
  ]
})
export class GoTopModule { }
