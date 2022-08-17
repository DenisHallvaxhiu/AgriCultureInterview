import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageMenuComponent } from './landing-page-menu/landing-page-menu.component';
import { LandingPageNavComponent } from './landing-page-nav/landing-page-nav.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingPageMenuComponent,
    LandingPageNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
