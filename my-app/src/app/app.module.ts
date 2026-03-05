import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

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
    // ListproductModule,
    // ProductdetailComponent,
    // FakeProductComponent,
    // BooksComponent,
    // BookDetailComponent,
    // NewBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }
