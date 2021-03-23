import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  template: `
    <form (ngSubmit) = "login()">
      Enter username: <input type="text" name = "t1" [(ngModel)]= username /><br />
      Enter password: <input type="password" name = "t2" [(ngModel)]= password /><br />
      <button type = "submit">Login</button>
      <div  *ngIf= "message" >{{ message }}</div>
    </form>
  `,
  styles: [
  ]
})
export class LoginComponent  {

  username: string;
  password: string;
  message : string;

  login(){
    if(this.username == 'vaishnavi' && this.password =='123'){
        this.message= 'Login Successful!'
    }
    else{
      this.message = 'Incorrect Username or Password!'
    }
  }
  
}
