import { SupportComponent } from './support/support.component';
import { ReferComponent } from './refer/refer.component';
import { TransferComponent } from './transfer/transfer.component';
import { ProductComponent } from './product/product.component';
import { FinancialComponent } from './financial/financial.component';
import { StatisticComponent } from './statistic/statistic.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'statistic', component: StatisticComponent },
  { path: 'financial', component: FinancialComponent },
  { path: 'product', component: ProductComponent },
  { path: 'transfer', component: TransferComponent },
  { path: 'refer', component: ReferComponent },
  { path: 'support', component: SupportComponent },
  { path: '', redirectTo: '/statistic#statistic', pathMatch: 'full' },
  { path: '**', redirectTo: '/statistic#statistic'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
