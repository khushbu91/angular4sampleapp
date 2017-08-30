import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { AppRoutingModule }  from './app-routing.module';

import {ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import {User} from './user'

import { SigninService } from './signin/signin.service';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    SignupComponent,
    SigninComponent

  ],
  providers: [SigninService],
  bootstrap: [AppComponent]
})
export class AppModule { }
