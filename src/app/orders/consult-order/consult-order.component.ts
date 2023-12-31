import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-consult-order',
  templateUrl: './consult-order.component.html',
  styleUrls: ['./consult-order.component.css']
})

export class ConsultOrderComponent implements OnInit {
  documentTypes: any[] = [];

  orderForm = this.fb.group({
    order_code: [''],
    document: ['', Validators.required],
    document_type: [{}, Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
  ) {}

  onSubmit()
  {
    if (!(this.orderForm.valid))
      return;

    let document_type: any = this.document_type.value;
    let id: any;

    if (typeof document_type === 'object' && document_type?.hasOwnProperty('id'))
      id = document_type.id;
    else
      return;

    this.router.navigate(['show-orders'], {
      queryParams: { 
        document_type: id,
        document: this.document.value,
        order_code: this.order_code.value,
        }
    });
  }

  get document() { return this.orderForm.controls.document }
  get document_type() { return this.orderForm.controls.document_type }
  get order_code() { return this.orderForm.controls.order_code }

  ngOnInit()
  {
    this.documentTypes = [
      { id: '', name: 'seleccione...' },
      { id: 1, name: 'cc' },
      { id: 2, name: 'ti' },
      { id: 3, name: 'ce' }
    ];
  }
}
