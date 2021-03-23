import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-increment',
  template: `
      <h2 class="counter">
        {{ counter }}
      </h2>
      <button class="counter-button" (click)="incrementCounter()">Click</button>
  `,
  styles: [
    `
      .counter-button{
        font-size : 1rem;
        padding : 5px 10px;
        color: #585858;
      }

    `
  ]
})
export class CounterIncrementComponent {

  counter : number =42;

  incrementCounter(){
    this.counter++;
  }

}
