import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../bai-cu/customer-service';

@Component({
  selector: 'app-customer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './customer.html',
  styleUrls: ['./customer.css'],
})
export class Customer {
  products: any;
  constructor(ps: CustomerService) {
    this.products = ps.getAllProducts();
  }
}
