import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConsultOrderComponent } from './consult-order/consult-order.component';
import { ShowOrdersComponent } from './show-orders/show-orders.component';

const routes: Routes = [
  { path: 'consult-order', component: ConsultOrderComponent},
  { path: 'show-orders', component: ShowOrdersComponent},
  { path: "", redirectTo: "consult-order", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
