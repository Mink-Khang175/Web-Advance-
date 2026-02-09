import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ptb2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './ptb2.component.html',
  styleUrls: ['./ptb2.component.css']
})
export class Ptb2Component {
  hsa:string="100"
  hsb:string="200"
  hsc:string="300"
  result:string=".............."
  get_solution()
  {
    let a=parseFloat(this.hsa)
    let b=parseFloat(this.hsb)
    let c=parseFloat(this.hsc)
   
    if(a==0)
    {
      if(b==0 && c==0)
      {
        this.result="PT này vô số nghiệm"
      }
      else if (b==0 &&c!=0)
      {
        this.result="PT này vô nghiệm"
      }
      else
      {
        let x=-c/b
        this.result="PT có 1 No. x ="+x
      }
    }   
    else
    {
      let delta=Math.pow(b,2)-4*a*c
      this.result="biện luận theo delta="+delta
      if(delta<0)
      {
        this.result="PTB2 này Vô No."
      }
      else if (delta==0)
      {
        let x=-b/(2*a)
        this.result="PTB2 này có No. Kép x1=x2="+x
      }
      else
      {
        let x1=(-b-Math.sqrt(delta))/(2*a)
        let x2=(-b+Math.sqrt(delta))/(2*a)
        this.result="x1="+x1+";x2="+x2
      }
    }
  }
}
