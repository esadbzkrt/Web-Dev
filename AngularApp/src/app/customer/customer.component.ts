import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css'],
})
export class CustomerComponent implements OnInit {
  constructor() {}
  customers: Customer[] = []
  selectedCustomer!: Customer;
  ngOnInit(): void {

    this.customers=[
      {id:1,firstName: 'Esad',lastName: 'Bz',age:24},
      {id:2,firstName: 'Metin',lastName: 'Bz',age:24},
      {id:3,firstName: 'Hakan',lastName: 'Bz',age:24},
      {id:4,firstName: 'Can',lastName: 'Bz',age:24}
    ]
  }
  selectCustomer(customer:Customer){
   this.selectedCustomer=customer

  }

}
