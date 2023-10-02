import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from '../../service/order.service';
import { Message } from 'primeng/api';

@Component({
  selector: 'app-show-orders',
  templateUrl: './show-orders.component.html',
  styleUrls: ['./show-orders.component.css']
})

export class ShowOrdersComponent implements OnInit 
{
  message: Message[] | undefined;
  errorForms: Message[] | undefined = [];
  isSuccessful: Boolean = true;

  orderList?: any;
  order?: any;
  hideOrderList: Boolean = false;
  
  customer_name: any;
  customer_document: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private orderService: OrderService
  ) { }

  goToForm()
  {
    this.setOrder([]);
    this.setOrderList([]);
    this.router.navigate([""]);
  }
  
  setOrder(order: any)
  {
    this.hideOrderList = true;
    this.order = order;
  }

  setOrderList(orderList: any)
  {
    this.orderList = orderList;
    this.hideOrderList = false;
  }

  showOrders()
  {
    this.hideOrderList = false;
    this.order = [];
  }

  closeWindow()
  {
    let location = this.router.url; 
    // Open the current URL using JavaScript
    window.open(location, '_self');

    // Close the new window
    window.close();  
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((params: any) => {
      let order_code = params.params.order_code;
      let document = params.params.document;
      let document_type = params.params.document_type;

      if (document == "" || document_type == "")
        this.router.navigate(['']);

      const formData = {
        document: document,
        document_type: document_type,
        order_code: order_code
      }

      this.orderService.getOrder(formData)
        .subscribe((response: any) => {
          if (response.original.response == "unsuccessful")
          {
            this.message = [{ severity: 'error', summary: 'Error', detail: response.original.message }];
            this.isSuccessful = false;
          }
          else
          {
            const data = response.original.data[0];
            this.isSuccessful = true;
  
            if (data.hasOwnProperty("customer"))
            {
              this.customer_document = data.customer.document;
              this.customer_name = data.customer.name;
  
              this.setOrder(data);
            }
            else
            {
              this.customer_name = data.name;
              this.customer_document = data.document;
  
              this.setOrderList(data.orders)
            }
          }
        },
        (error: any) => {
          this.isSuccessful = false;

          let errorObject = error.error.errors;
          let objectKeys = Object.keys(errorObject);

          for (let key of objectKeys)
          {
            this.makeErrorMessage(errorObject[key][0]);
          }
        });
    });
  }
  
  makeErrorMessage(message: any | string)
  {
    this.errorForms?.push({ severity: 'error', summary: 'Error', detail: message });
  }
}
