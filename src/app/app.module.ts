import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HeaderModule } from '@shared/modules/header/header.module';
import { FooterModule } from '@shared/modules/footer/footer.module';
import { GoTopModule } from '@shared/modules/go-top/go-top.module';
import { LoaderModule } from '@shared/modules/loader/loader.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    FooterModule,
    GoTopModule,
    LoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
