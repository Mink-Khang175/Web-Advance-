import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerType, Ex18Service } from './ex18-service';

@Component({
  selector: 'app-ex18',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ex18.html',
  styleUrls: ['./ex18.css'],
})
export class Ex18 {
  data: CustomerType[] = [];

  constructor(private ex18Service: Ex18Service) {
    this.ex18Service.getCustomerTypes().subscribe({
      next: (data: CustomerType[]) => {
        this.data = data;
      },
      error: (err: unknown) => {
        console.error('Error loading data:', err);
      },
    });
  }
}
