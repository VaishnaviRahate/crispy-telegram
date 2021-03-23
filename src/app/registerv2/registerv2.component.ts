import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-registerv2',
  template: `
    
  <form #regForm="ngForm" (ngSubmit)="register(regForm)">
    <div>Enter Name: <input type="text" name="name" required  [(ngModel)]=user.name  #name="ngModel" ngModel /></div>

    <div>Enter Email: <input type="email" name="email"  [(ngModel)]=user.email  #email="ngModel" ngModel /></div>

    <div>Enter Password: <input type="password" name="password" [(ngModel)]=user.password  #password="ngModel" ngModel/></div>

    <div>Enter City: <input type="text" name="city" [(ngModel)]=user.address.city  #city="ngModel" ngModel/></div>

    <div>Enter Pincode: <input type="number" name="pincode" [(ngModel)]=user.address.pincode  #pincode="ngModel" ngModel/></div>

    <button type="submit">Register</button>


  </form>

  `,
  styles: [
  ]
})
export class Registerv2Component  {

  user : User = new User();
  message: string;

  register(f: NgForm){
    if(f.valid)
      console.log(this.user);

    else  
      alert("Please fix all the errors in the form and submit again...");
  }
  

}

export class User {
  name : string;
  email : string;
  password : string;
  address : Address = new Address();
}

export class Address {
  city : string;
  pincode : number;
}
