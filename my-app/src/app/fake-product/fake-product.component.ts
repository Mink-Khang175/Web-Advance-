import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FakeProductService } from '../myservices/fake-product.service';

@Component({
  selector: 'app-fake-product',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fake-product.component.html',
  styleUrls: ['./fake-product.component.css']
})
export class FakeProductComponent {

  data:any
  errMessage:string=''
  constructor(_service:FakeProductService){
  _service.getFakeProductData().subscribe({
  next:(data)=>{ this.data=data},
  error:(err)=>{
  this.errMessage=err
  }
  })
  }

}
