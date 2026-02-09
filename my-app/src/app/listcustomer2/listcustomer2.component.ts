import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-listcustomer2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listcustomer2.component.html',
  styleUrls: ['./listcustomer2.component.css']
})
export class Listcustomer2Component {
  customers:any
  constructor(private cs:CustomerService)
  {
    this.customers=cs.get_all_customers()
  }
  
}
