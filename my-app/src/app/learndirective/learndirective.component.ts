import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-learndirective',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './learndirective.component.html',
  styleUrls: ['./learndirective.component.css']
})
export class LearndirectiveComponent {
  flag_value:number=1
  changeView()
  {
    if(this.flag_value==1)
      this.flag_value=2
    else
      this.flag_value=1
  }

  products=["Thuốc Lào","Thuốc Lá","Thuốc Trị Hôi Nách"]
  customers=[
          {"id":"c1","name":"obama","phone":"113"},
          {"id":"c2","name":"putin","phone":"114"},
          {"id":"c3","name":"Biden","phone":"115"},
      ]

}
