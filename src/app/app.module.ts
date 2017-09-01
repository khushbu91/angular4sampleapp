import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { AppRoutingModule }  from './app-routing.module';


import {ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './signin/signin.component';
import {User} from './user'

import { SigninService } from './signin/signin.service';
import { SignupService } from './signup/signup.service';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    SigninComponent

  ],
  providers: [SigninService,SignupService],
  bootstrap: [AppComponent]
})
export class AppModule { }
