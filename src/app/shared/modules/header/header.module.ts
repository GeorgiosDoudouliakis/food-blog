import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { ToggleMenuDirective } from './directives/toggle-menu.directive';
import { CloseMenuDirective } from './directives/close-menu.directive';

@NgModule({
    imports: [RouterModule],
    declarations: [
        HeaderComponent,
        ToggleMenuDirective,
        CloseMenuDirective
    ],
    exports: [HeaderComponent]
})
export class HeaderModule { }
