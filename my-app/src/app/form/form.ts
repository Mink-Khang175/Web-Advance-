import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Student } from '../classes/student';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  studentModel = new Student('Nam Anh', 'anh@gmail.com', '0909090909', 'python', 'toi');
  courses = ['python', 'Angular', 'React', 'Vue', 'NodeJS'];
  errFlag = false;

  validateCourse(value: any): void {
    if (value === 'none') this.errFlag = true;
    else this.errFlag = false;
  }
}
