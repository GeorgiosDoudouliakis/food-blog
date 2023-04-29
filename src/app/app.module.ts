/* Place your angular imports here */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';

/* Place your component imports here */
import { AppComponent } from './app.component';
import { FooterComponent, GoTopComponent } from "./components";

/* Place any other module imports here */
import { HeaderModule } from '@shared/modules/header/header.module';
import { LoaderModule } from '@shared/modules/loader/loader.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderModule,
    FooterComponent,
    GoTopComponent,
    LoaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
