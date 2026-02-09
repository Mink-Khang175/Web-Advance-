import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-ex28',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ex28.html',
  styleUrl: './ex28.css',
})
export class Ex28 implements OnInit {
  bitcoinData: any = null;
  errMessage: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.loadBitcoinPrice();
  }

  loadBitcoinPrice() {
    this.http.get('/assets/dataset/ex28.json')
      .subscribe({
        next: (data) => {
          this.bitcoinData = data;
          this.errMessage = '';
        },
        error: (err: any) => {
          this.errMessage = err?.message ?? String(err);
        }
      });
  }
}
