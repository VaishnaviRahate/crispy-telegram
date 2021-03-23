import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple-form',
  template: `
    <form (ngSubmit) = "doSomething()">
        Enter your name : <input type="text" name="t1" [(ngModel)]=name /> <br />
        Enter your BirthDay: <input type="date" name="t2" [(ngModel)]=dob /> <br/>
        <button type = "submit">Submit </button>
      </form>

      <div *ngIf="check">
        Hello {{name}}, how are you? You have been troubling people on planet earth since {{dob}}
      </div>
  `,
  styles: [
  ]
})
export class SimpleFormComponent  {

  name : string; // we want whatever the user enters in the textfield above to the stored here
  dob : Date;
  check : boolean;

  doSomething(){
    // alert(this.name + " " + this.dob);
    this.name = this.name.toUpperCase();
    this.check = true;

  }

}
