import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  student_id:string="SV113"
  student_name:string="Nguyễn Thị Long Lanh"
  student_email:string="longlanh@st.uel.edu.vn"
  my_uni_logo="cach-su-dung-logo-uel-13.jpg"
}
