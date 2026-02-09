import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LearnbindingComponent } from './learnbinding/learnbinding.component';
import { LearndirectiveComponent } from './learndirective/learndirective.component';
import { Ptb1Component } from './ptb1/ptb1.component';
import { Ptb2Component } from './ptb2/ptb2.component';
import { ListcustomerComponent } from './listcustomer/listcustomer.component';
import { Listcustomer2Component } from './listcustomer2/listcustomer2.component';
import { Listcustomer3Component } from './listcustomer3/listcustomer3.component';
import { CustomerdetailComponent } from './customerdetail/customerdetail.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ListproductComponent } from './listproduct/listproduct.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { FakeProductComponent } from './fake-product/fake-product.component';
import { BooksComponent } from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { NewBookComponent } from './new-book/new-book.component';
import { Form } from './form/form';
import { ReactiveForm } from './reactive-form/reactive-form';
import { Ex10 } from './ex10/ex10';
import { Ex14 } from './ex14/ex14';
import { Ex15 } from './ex15/ex15';
import { Ex18 } from './ex18/ex18';
import { Ex19 } from './ex19/ex19';
import { Ex26 } from './ex26/ex26';
import { Ex27 } from './ex27/ex27';
import { Ex28 } from './ex28/ex28';
import { Ex50 } from './ex50/ex50';
import { Gpa } from './gpa/gpa';
import { Customer } from './customer/customer';
import { Mybinding } from './mybinding/mybinding';
import { ListProduct1 } from './list-product-1/list-product-1';
import { ListProduct2 } from './list-product-2/list-product-2';
import { ListProduct3 } from './list-product-3/list-product-3';
import { ListCustomerService } from './list-customer-service/list-customer-service';
import { ListCustomerHttpService } from './list-customer-http-service/list-customer-http-service';
import { LearnDitective } from './learn-directive/learn-ditective';
import { CatalogComponent } from './catalog/catalog';
import { FileUploadComponent } from './file-upload.component/file-upload.component';
import { ServiceProductImageEvent } from './ex13/service-product-image-event/service-product-image-event';
import { ServiceProductImageEventDetail } from './ex13/service-product-image-event-detail/service-product-image-event-detail';
import { PageNotFound } from './page-not-found/page-not-found';
import { Product } from './ex19/product/product';
import { ListProduct } from './ex19/list-product/list-product';
import { ServiceProduct } from './ex19/service-product/service-product';

export const routes: Routes = [
  {path:"",redirectTo:"gioi-thieu",pathMatch:"full"},
  {path:"gioi-thieu",component:AboutComponent},
  {path:"lien-he",component:ContactComponent},
  
  // Learning examples
  {path:"learn-binding",component:LearnbindingComponent},
  {path:"learn-directive",component:LearndirectiveComponent},
  {path:"learn-directive-2",component:LearnDitective},
  {path:"mybinding",component:Mybinding},
  {path:"ptb1",component:Ptb1Component},
  {path:"ptb2",component:Ptb2Component},
  {path:"gpa",component:Gpa},
  
  // Customers
  {path:"khach-hang-1",component:ListcustomerComponent},
  {path:"khach-hang-2",component:Listcustomer2Component},
  {path:"khach-hang-3",component:Listcustomer3Component},
  {path:"khach-hang-detail",component:CustomerdetailComponent},
  {path:"customer",component:Customer},
  {path:"list-customer-service",component:ListCustomerService},
  {path:"list-customer-http",component:ListCustomerHttpService},
  
  // Products
  {path:"san-pham-1",component:ListproductComponent},
  {path:"san-pham-1/:id",component:ProductdetailComponent},
  {path:"san-pham-2",component:ListProduct1},
  {path:"san-pham-3",component:ListProduct2},
  {path:"san-pham-4",component:ListProduct3},
  
  // Forms
  {path:"form",component:Form},
  {path:"reactive-form",component:ReactiveForm},
  
  // External API
  {path:"ex26",component:Ex26},
  {path:"ex27",component:Ex27},
  {path:"ex28",component:Ex28},
  {path:"fake-product",component:FakeProductComponent},
  
  // Internal API
  {path:"ex39",component:BooksComponent},
  {path:"ex41",component:BookDetailComponent},
  {path:"ex41/:id",component:BookDetailComponent},
  {path:"ex43",component:NewBookComponent},
  
  // Exercises
  {path:"ex10",component:Ex10},
  {path:"ex13",component:ServiceProductImageEvent},
  {path:"ex13/:id",component:ServiceProductImageEventDetail},
  {path:"ex14",component:Ex14},
  {path:"ex15",component:Ex15},
  {path:"ex18",component:Ex18},
  {path:"ex19",component:Ex19},
  {path:"product",component:Product},
  {path:"list-product",component:ListProduct},
  {path:"service-product",component:ServiceProduct},
  {path:"ex50",component:Ex50},
  
  // Others
  {path:"catalog",component:CatalogComponent},
  {path:"file-upload",component:FileUploadComponent},
  {path:"page-not-found",component:PageNotFound},
  
  {path:"**",component:NotfoundComponent}
];
