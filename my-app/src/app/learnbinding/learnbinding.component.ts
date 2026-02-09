import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-learnbinding',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './learnbinding.component.html',
  styleUrls: ['./learnbinding.component.css']
})
export class LearnbindingComponent {
  student_id:string="K23411123"
  student_name:string="Nguyễn Thị Long Lanh"
  student_address:string="1 Đinh Tiên Hoàng - Phường Sài Gòn"
  red_text_style={
    color:'red'
  }
}
