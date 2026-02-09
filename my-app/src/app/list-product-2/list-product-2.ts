import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../bai-cu/product-service';

@Component({
  selector: 'app-list-product-2',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-product-2.html',
  styleUrls: ['./list-product-2.css'],
})
export class ListProduct2 {
  products: any;
  constructor(ps: ProductService) {
    this.products = ps.getAllProducts();
  }
}
