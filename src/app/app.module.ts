import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from '@shared/shared.module';
import { HeaderModule } from '@shared/modules/header/header.module';
import { FooterModule } from '@shared/modules/footer/footer.module';
import { GoTopModule } from '@shared/modules/go-top/go-top.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    HeaderModule,
    FooterModule,
    GoTopModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
