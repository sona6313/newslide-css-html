import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Card2Component } from './components/card2/card2.component';
import { CarddComponent } from './components/cardd/cardd.component';
// import { DashboardCardsComponent } from './components/dashboard-cards/dashboard-cards.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const routes: Routes = [
  {path:'',component:CarddComponent},
  {path:'back',component:Card2Component},
  {path:'ck',component:WelcomeComponent},
  {path:'dash',component:DashboardComponent},
  // {path:'card',component:DashboardCardsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
