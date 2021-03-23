import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { WelcomeComponent } from './welcome.component';
import { LuckyNumberComponent} from './lucky-number.component';
import { SimpleComponent } from './simple/simple.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { FormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Registerv2Component } from './registerv2/registerv2.component';
import { LikeDislikeComponent } from './like-dislike/like-dislike.component';
import { CounterIncrementComponent } from './counter-increment/counter-increment.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    WelcomeComponent,
    LuckyNumberComponent,
    SimpleComponent,
    SimpleFormComponent,
    CalculatorComponent,
    LoginComponent,
    RegisterComponent,
    Registerv2Component,
    LikeDislikeComponent,
    CounterIncrementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
