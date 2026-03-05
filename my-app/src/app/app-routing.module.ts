import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ListcustomerComponent } from './listcustomer/listcustomer.component';
import { Listcustomer2Component } from './listcustomer2/listcustomer2.component';
import { Listcustomer3Component } from './listcustomer3/listcustomer3.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { FakeProductComponent } from './fake-product/fake-product.component';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { NewBookComponent } from './new-book/new-book.component';
import { PaymentComponent } from './payment/payment/payment.component';
import { PaymentResultComponent } from './payment-result/payment-result/payment-result.component';
import { Ex61Login } from './ex61-login/ex61-login';

const routes: Routes = [
  {path:"gioi-thieu",component:AboutComponent},
  {path:"khach-hang-1",component:ListcustomerComponent},
  {path:"khach-hang-2",component:Listcustomer2Component},
  {path:"khach-hang-3",component:Listcustomer3Component},
  {path:"san-pham-1",component:ListproductComponent},
  {path:"san-pham-1/:id",component:ProductdetailComponent},
  {path:"ex26",component:FakeProductComponent},
  {path:"ex39",component:BooksComponent},
  {path:"ex41",component:BookDetailComponent},
  {path:"ex41/:id",component:BookDetailComponent},
  {path:"ex43",component:NewBookComponent},
  {path:"payment",component:PaymentComponent},
  {path:"payment-result",component:PaymentResultComponent},
  {path:"ex61",component:Ex61Login},
  {path:"**",component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
