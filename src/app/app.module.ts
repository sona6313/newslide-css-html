import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarddComponent } from './components/cardd/cardd.component';
import { Card2Component } from './components/card2/card2.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { DashboardCardsComponent } from './components/dashboard-cards/dashboard-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    CarddComponent,
    Card2Component,
    WelcomeComponent,
    DashboardComponent,
    // DashboardCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
