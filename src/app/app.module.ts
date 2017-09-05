import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { AppRoutingModule }  from './app-routing.module';


import {ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './signin/signin.component';
import { ShoppingListComponent } from './shoppingList/shoppinglist.component';
import {User} from './user'

import {ShoppingItem} from './shoppingItem'

import { SigninService } from './signin/signin.service';
import { SignupService } from './signup/signup.service';
import { ShoppingListService } from './shoppingList/shoppinglist.service';
import { CookieService } from 'ngx-cookie-service';

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
    SigninComponent,
    ShoppingListComponent

  ],
  providers: [SigninService,SignupService,ShoppingListService,CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
