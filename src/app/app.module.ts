import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { AppRoutingModule }  from './app-routing.module';

import {FormsModule, FormBuilder, FormGroup, Validators} from '@angular/forms';


import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    FormBuilder,
    FormGroup,
    Validators,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
