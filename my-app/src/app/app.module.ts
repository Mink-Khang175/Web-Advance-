import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LearnbindingComponent } from './learnbinding/learnbinding.component';
import { Ptb1Component } from './ptb1/ptb1.component';
import { FormsModule } from '@angular/forms';
import { Ptb2Component } from './ptb2/ptb2.component';
import { LearndirectiveComponent } from './learndirective/learndirective.component';
import { ListcustomerComponent } from './listcustomer/listcustomer.component';
import { Listcustomer2Component } from './listcustomer2/listcustomer2.component';
import { CustomerdetailComponent } from './customerdetail/customerdetail.component';
import { Listcustomer3Component } from './listcustomer3/listcustomer3.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { FakeProductComponent } from './fake-product/fake-product.component';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { NewBookComponent } from './new-book/new-book.component';

// Module này không còn được sử dụng vì app đã chuyển sang standalone components
// Giữ lại để tham khảo
@NgModule({
  declarations: [
    // AppComponent,
    // AboutComponent,
    // ContactComponent,
    // LearnbindingComponent,
    // Ptb1Component,
    // Ptb2Component,
    // LearndirectiveComponent,
    // ListcustomerComponent,
    // Listcustomer2Component,
    // CustomerdetailComponent,
    // Listcustomer3Component,
    // NotfoundComponent,
    // ListproductComponent,
    // ProductdetailComponent,
    // FakeProductComponent,
    // BooksComponent,
    // BookDetailComponent,
    // NewBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
