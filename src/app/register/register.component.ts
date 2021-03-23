import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  template: `
    <form #myForm="ngForm" (ngSubmit) = "register(myForm)">
      <label>Name: </label>
      <input type="text" name="name" required minlength="3" #name="ngModel" ngModel /><br />
      <!-- <div *ngIf= "name.invalid && (name.dirty || name.touched)"> -->
      <div *ngIf="myForm.submitted && name.invalid">
        <div *ngIf="name.errors.required">Name is required</div>
        <div *ngIf="name.errors.minlength">Name should contain atleast 3 characters</div>
      </div>  
      
      
      <label>Email: </label>
      <input type="email" name="email" required #email="ngModel" ngModel /><br />
      <!-- <div *ngIf= "email.invalid && (email.dirty || email.touched)"> -->
      <div *ngIf="myForm.submitted && email.invalid">
        <div *ngIf= "email.errors.required"> Email is required </div>
      </div>


      <label>Password: </label>
      <input type="password" name="password" required #password="ngModel" ngModel /><br />
      <!-- <div *ngIf= "password.invalid && (password.dirty || password.touched)"> -->
      <div *ngIf="myForm.submitted && password.invalid">
        <div *ngIf= "password.errors.required"> Password is required </div>
      </div>

      <label>City: </label>
      <input type="text" name="city" #city="ngModel" ngModel/><br />
      

      <label>PinCode: </label>
      <input type="number" name="pincode" #pincode="ngModel"ngModel /><br />

      <button type="submit">Register</button>

    </form>
  `,
  styles: [
  ]
})
export class RegisterComponent  {

  register(myForm: NgForm){
    //console.log(Object.prototype.toString.call(myForm)); //prints -> on console -> object HTMLFormElement
    //console.log(typeof myForm); //prints-> on console-> object
    console.log(myForm); //Print all form elements in console
    console.log(myForm.value);
  }

  

}
