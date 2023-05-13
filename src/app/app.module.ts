/* Place your angular imports here */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';

/* Place your component imports here */
import { AppComponent } from './app.component';
import { HeaderComponent, FooterComponent, GoTopComponent } from "./components";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HeaderComponent,
    FooterComponent,
    GoTopComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
