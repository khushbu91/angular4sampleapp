import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { ShoppingListComponent } from './shoppingList/shoppinglist.component';
import { RecipeComponent } from './recipes/recipe.component';
 
const routes: Routes = [
	{	path : 'signin',
		component : SigninComponent
	},
	{	path : 'signup',
		component : SignupComponent
	},
	{
		path:'shoppingList',
		component :ShoppingListComponent
	},
	{
		path:'recipes',
		component :RecipeComponent
	},
	{
		path:'',
		redirectTo:"/signin",
		pathMatch:"full"
	}
];
 
@NgModule({
  imports: [ RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}