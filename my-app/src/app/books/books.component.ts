import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookAPIService } from '../myservices/book-api.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  books:any;
  errMessage:string=''
  constructor(private _service: BookAPIService,private router:Router,private activeRouter:ActivatedRoute){
    this._service.getBooks().subscribe({
    next:(data)=>{this.books=data},
    error:(err)=>{this.errMessage=err}
    })
  }
  view_detail(bookId:any)
  {
    this.router.navigate(["ex41",bookId])
  }
}
