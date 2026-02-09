import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-listproduct',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.css']
})
export class ListproductComponent {
  products=[{"id":"p1","name":"Coca","price":15,"image":"https://nhahangminori.vn/upload/image/sanpham/nomimono/coca.png"},
          {"id":"p2","name":"Pepsi","price":-25,"image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgHfhmO5f_J47GTGYaFQoTfcU6Ve5qMuftvQ&s"},
          {"id":"p3","name":"Redbull","price":12,"image":"https://pngdownload.io/wp-content/uploads/2025/05/Red-Bull-Sugar-Free-Can.webp"},
          {"id":"p4","name":"Aqua","price":-15,"image":"https://www.subway.co.id/wp-content/uploads/2021/08/Aqua-300ml.png"},
          {"id":"p5","name":"Lavie","price":18,"image":"https://nuockhoanglavie.com/wp-content/uploads/2018/10/lavie-750ml.png"}

  ]
  selected_id:any
  constructor(private router:Router,private activeRouter:ActivatedRoute)
  {
    //dùng router để điều hướng
    //dùng activeRouter để nhận điều hướng
    activeRouter.paramMap.subscribe((param)=>{
      this.selected_id=param.get("id")
    })
  }
  view_detail(pid:string)
  {
    //alert("Bạn muốn xem chi tiết sản phẩm có ID="+pid)
    this.router.navigate(["san-pham-1",pid])
  }
}
