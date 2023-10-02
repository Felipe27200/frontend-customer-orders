import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { OrdersRoutingModule } from './orders-routing.module';

import { ShowOrdersComponent } from './show-orders/show-orders.component';
import { ConsultOrderComponent } from './consult-order/consult-order.component';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { ListOrderComponent } from './list-order/list-order.component';
import { ListProductsComponent } from './list-products/list-products.component';

@NgModule({
  declarations: [
    ShowOrdersComponent,
    ConsultOrderComponent,
    ListOrderComponent,
    ListProductsComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    ButtonModule,
    InputTextModule,
    MultiSelectModule,
    DropdownModule,
    TableModule,
    CommonModule,
    OrdersRoutingModule
  ]
})
export class OrdersModule { }
