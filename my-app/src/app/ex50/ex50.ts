import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { BookService, Book } from './book.service';

@Component({
  selector: 'app-ex50',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  providers: [BookService],
  templateUrl: './ex50.html',
  styleUrls: ['./ex50.css'],
})
export class Ex50 implements OnInit {
  books = signal<Book[]>([]);
  viewState = signal<'list' | 'create' | 'edit' | 'details'>('list');
  selectedBook = signal<Book | null>(null);
  bookForm: FormGroup;
  selectedFile: File | null = null;
  uploadingImage = false;
  loadingBooks = false;

  constructor(
    private fb: FormBuilder,
    private bookService: BookService
  ) {
    this.bookForm = this.fb.group({
      id: [null],
      tenSach: ['', Validators.required],
      giaBan: [0, [Validators.required, Validators.min(0)]],
      moTa: [''],
      anhBia: ['https://via.placeholder.com/150'],
      ngayCapNhat: [new Date().toISOString()],
      soLuongTon: [0, [Validators.required, Validators.min(0)]],
      maCD: [1, Validators.required],
      maNXB: [1, Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadBooks();
  }

  loadBooks(): void {
    this.loadingBooks = true;
    this.bookService.getAllBooks().subscribe({
      next: (books) => {
        this.books.set(books);
        this.loadingBooks = false;
      },
      error: (error) => {
        console.error('Error loading books:', error);
        this.loadingBooks = false;
      }
    });
  }

  switchToCreate(): void {
    this.bookForm.reset({
      anhBia: 'https://via.placeholder.com/150',
      ngayCapNhat: new Date().toISOString(),
      giaBan: 0,
      soLuongTon: 0,
      maCD: 1,
      maNXB: 1,
    });
    this.selectedFile = null;
    this.viewState.set('create');
  }

  switchToEdit(book: Book): void {
    this.selectedBook.set(book);
    this.bookForm.patchValue(book);
    this.selectedFile = null;
    this.viewState.set('edit');
  }

  switchToDetails(book: Book): void {
    this.selectedBook.set(book);
    this.viewState.set('details');
  }

  switchToList(): void {
    this.viewState.set('list');
    this.selectedBook.set(null);
    this.selectedFile = null;
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      
      // Preview the image
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.bookForm.patchValue({ anhBia: e.target.result });
      };
      reader.readAsDataURL(file);
    }
  }

  saveBook(): void {
    if (this.bookForm.invalid) {
      alert('Vui lòng điền đầy đủ thông tin!');
      return;
    }

    // Upload image first if selected
    if (this.selectedFile) {
      this.uploadingImage = true;
      this.bookService.uploadImage(this.selectedFile).subscribe({
        next: (response) => {
          this.bookForm.patchValue({ anhBia: response.imageUrl });
          this.uploadingImage = false;
          this.saveBookData();
        },
        error: (error) => {
          console.error('Error uploading image:', error);
          this.uploadingImage = false;
          alert('Lỗi khi tải ảnh lên. Vui lòng thử lại!');
        }
      });
    } else {
      this.saveBookData();
    }
  }

  private saveBookData(): void {
    const formValue = this.bookForm.value as Book;

    if (this.viewState() === 'create') {
      this.bookService.createBook(formValue).subscribe({
        next: (newBook) => {
          this.loadBooks();
          this.switchToList();
          alert('Thêm sách thành công!');
        },
        error: (error) => {
          console.error('Error creating book:', error);
          alert('Lỗi khi thêm sách!');
        }
      });
    } else {
      const bookId = this.selectedBook()?.id;
      if (!bookId) return;

      this.bookService.updateBook(bookId, formValue).subscribe({
        next: (updatedBook) => {
          this.loadBooks();
          this.switchToList();
          alert('Cập nhật sách thành công!');
        },
        error: (error) => {
          console.error('Error updating book:', error);
          alert('Lỗi khi cập nhật sách!');
        }
      });
    }
  }

  deleteBook(book: Book): void {
    const confirmDelete = confirm(`Bạn có chắc chắn muốn xóa sách: "${book.tenSach}" không?`);
    if (!confirmDelete) {
      return;
    }

    if (!book.id) return;

    this.bookService.deleteBook(book.id).subscribe({
      next: () => {
        this.loadBooks();
        alert('Xóa sách thành công!');
      },
      error: (error) => {
        console.error('Error deleting book:', error);
        alert('Lỗi khi xóa sách!');
      }
    });
  }
  
  getImageFileName(url: string): string {
    if (!url) return '';
    const parts = url.split('/');
    const filename = parts[parts.length - 1];
    return filename.length > 15 ? filename.substring(0, 12) + '...' : filename;
  }
}
