import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.css']
})

export class ListProductsComponent implements OnChanges
{
  @Input() order: any;
  details: any;

  constructor(
    private location: Location
  ) { }

  ngOnChanges(changes: SimpleChanges): void 
  {
    this.details = changes["order"].currentValue.details;
  }
}
