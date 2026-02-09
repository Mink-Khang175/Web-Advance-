import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Book } from '../myclasses/ibook';
import { BookAPIService } from '../myservices/book-api.service';

@Component({
  selector: 'app-new-book',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent {
  book=new Book();
  books:any
  errMessage:string=''
  constructor(private _service: BookAPIService){
    this._service.getBooks().subscribe({
    next:(data)=>{this.books=data},
    error:(err)=>{this.errMessage=err}
    })
  }
  postBook()
  {
    this._service.postBook(this.book).subscribe({next:(data)=>{this.books=data},
    error:(err)=>{this.errMessage=err}
    })
  }

}
