import { ReferComponent } from './refer/refer.component';
import { FinancialComponent } from './financial/financial.component';
import { StatisticComponent } from './statistic/statistic.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'statistic', component: StatisticComponent },
  { path: 'financial', component: FinancialComponent },
  { path: 'refer', component: ReferComponent },
  { path: '', redirectTo: '/statistic#statistic', pathMatch: 'full' },
  { path: '**', redirectTo: '/statistic#statistic'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
