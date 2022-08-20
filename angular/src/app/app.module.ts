import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageMenuComponent } from './landing-page-menu/landing-page-menu.component';
import { LandingPageNavComponent } from './landing-page-nav/landing-page-nav.component';
import { StatisticComponent } from './statistic/statistic.component';
import { FinancialComponent } from './financial/financial.component';
import { ReferComponent } from './refer/refer.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'



@NgModule({
  declarations: [
    AppComponent,
    LandingPageMenuComponent,
    LandingPageNavComponent,
    StatisticComponent,
    FinancialComponent,
    ReferComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
