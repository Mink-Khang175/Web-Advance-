import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ptb1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ptb1.component.html',
  styleUrls: ['./ptb1.component.css']
})
export class Ptb1Component {
  get_solution(hsa:HTMLInputElement,hsb:HTMLInputElement,result:HTMLElement)
  {
    let a=parseFloat(hsa.value)
    let b=parseFloat(hsb.value)
    if(a==0 && b==0)
    {
      result.innerHTML="Tùm lum nghiệm"   
    }    
    else if(a==0 && b!=0)
    {
      result.innerHTML="Nẩu có nghiệm"   
    }
    else
    {
      let x=-b/a
      result.innerHTML="x="+x
    }
  }
  clear_data(hsa:HTMLInputElement,hsb:HTMLInputElement,result:HTMLElement)
  {
    hsa.value=""
    hsb.value=""
    result.innerHTML=""
    hsa.focus()
  }
}
