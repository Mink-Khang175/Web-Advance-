import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  sendContact():void
  {
    const input_name=document.getElementById("name") as HTMLInputElement
    const input_email=document.getElementById("email") as HTMLInputElement
    const tdphanhoi=document.getElementById("tdphanhoi")
    alert("Tui đã nhận được lời thỉnh cầu của thượng đế ["+input_name.value+"]")    
    
  }
}
