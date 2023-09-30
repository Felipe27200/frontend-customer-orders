import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConsultOrderComponent } from './orders/consult-order/consult-order.component';

const appRoutes: Routes = [
  { path: 'consult-order', component: ConsultOrderComponent},
  { path: '', redirectTo: '/consult-order', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
