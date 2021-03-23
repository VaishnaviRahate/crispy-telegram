import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  template: `
    
    <form>
      Enter 1st number : <input type="number" name="1stNumber" [(ngModel)]= num1 /> <br />
      Enter 2nd number : <input type="number" name="2ndNumber" [(ngModel)]= num2 /> <br />
      <button (click) = "addition()">Add </button>
      <button (click) = "subtraction()">Subtract </button>
      <div  *ngIf= "check1" >
          Your Ans is: {{addRes}};
      </div>
      <div  *ngIf= "check2" >
          Your Ans is: {{subRes}};
      </div>

    </form>
  `,
  styles: [
  ]
})
export class CalculatorComponent  {

  num1 : number;
  num2 : number;
  addRes : number;
  subRes : number;
  check1 : boolean;
  check2 : boolean;

  addition(){
    this.addRes = this.num1 + this.num2;
    this.check1 = true;

  }

  subtraction(){
    this.subRes = this.num1 - this.num2;
    this.check2 = true;

  }


  
}
