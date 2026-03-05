import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const API = 'http://localhost:3000';

const FAKE_PRODUCTS = [
  { _id: '1', name: 'Diamond Promise Ring 1/6 ct tw Round-cut 10K White Gold',        price: 399.99, rating: 0, image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_FMwebp_QL65_.jpg' },
  { _id: '2', name: 'Diamond Promise Ring 1/4 ct tw Round/Baguette 10K White Gold',   price: 529.00, rating: 0, image: 'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg' },
  { _id: '3', name: 'Diamond Promise Ring 1/6 ct tw Black/White Sterling Silver',      price: 159.00, rating: 0, image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_FMwebp_QL65_.jpg' },
  { _id: '4', name: 'Diamond Promise Ring 1/5 ct tw Round-cut Sterling Silver',        price: 289.00, rating: 0, image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_FMwebp_QL65_.jpg' },
  { _id: '5', name: 'Diamond Promise Ring 1/5 ct tw Round-cut Sterling Silver',        price: 289.00, rating: 0, image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_FMwebp_QL65_.jpg' },
  { _id: '6', name: 'Diamond Promise Ring 1/8 ct tw Round-cut Sterling Silver Ring',   price: 229.00, rating: 0, image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_FMwebp_QL65_.jpg' },
];

@Component({
    selector: 'app-ex63',
    standalone: true,
    imports: [CommonModule, FormsModule],
    templateUrl: './ex63.html',
    styleUrl: './ex63.css'
})
export class Ex63Component implements OnInit {
    products: any[] = [];
    cart: any[] = [];
    view: string = 'products';
    message: string = '';

    constructor() { }

    ngOnInit(): void {
        this.products = FAKE_PRODUCTS;
    }

    addToCart(product: any): void {
        const existing = this.cart.find(i => i._id === product._id);
        if (existing) {
            existing.qty++;
        } else {
            this.cart.push({ ...product, qty: 1, checked: false });
        }
        this.message = '✅ Added to cart! Cart has ' + this.cart.length + ' item(s).';
        setTimeout(() => this.message = '', 2000);
    }

    updateCart(): void {
        this.cart = this.cart
            .filter(item => !item.checked)
            .filter(item => item.qty > 0);
    }

    getTotal(): number {
        return this.cart.reduce((sum, item) => sum + (item.price * item.qty), 0);
    }

    showCart(): void {
        this.view = 'cart';
    }

    showProducts(): void {
        this.view = 'products';
    }

    stars(n: number): number[] {
        return [1, 2, 3, 4, 5];
    }
}