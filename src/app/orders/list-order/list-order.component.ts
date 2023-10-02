import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-list-order',
  templateUrl: './list-order.component.html',
  styleUrls: ['./list-order.component.css']
})
export class ListOrderComponent implements OnInit
{
  @Input() orderList: any = {};
  @Output() order = new EventEmitter<any>();

  setOrder (order: any)
  {
    this.order.emit(order);
  }

  ngOnInit()
  {

  }
}
