import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule} from '@angular/http';
import { AppRoutingModule }  from './app-routing.module';


import {ReactiveFormsModule} from '@angular/forms';
import { SimpleDropdownModule } from 'ng2-simple-dropdown';


import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './signin/signin.component';
import { ShoppingListComponent } from './shoppingList/shoppinglist.component';
import { RecipeComponent } from './recipes/recipe.component';
import { RecipeListComponent } from './recipes/recipelist.component';
import { AddRecipeComponent } from './recipes/addrecipe.component';

import {User} from './user'

import {ShoppingItem} from './shoppingItem'

import { SigninService } from './signin/signin.service';
import { SignupService } from './signup/signup.service';
import { ShoppingListService } from './shoppingList/shoppinglist.service';
import { CookieService } from 'ngx-cookie-service';
import { RecipesService } from './recipes/recipes.service';

import {ImageUrlValidator} from './shared/imageurlvalidator.directive';
import { RecipedetailComponent } from './recipedetail/recipedetail.component';
import {NgbModal,NgbModule,NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import { NgbdModalContent} from './modal/modal.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,NgbModule.forRoot()
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    SignupComponent,
    SigninComponent,
    ShoppingListComponent,
    RecipeComponent,
    RecipeListComponent,
    AddRecipeComponent,
    ImageUrlValidator,
    RecipedetailComponent,
    NgbdModalContent
    
    
  ],
  entryComponents: [NgbdModalContent],
  providers: [SigninService,SignupService,ShoppingListService,
  CookieService,RecipesService,NgbModal,NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
