import {Component, OnInit,Input} from "@angular/core";
import {RecipeListComponent} from "./recipelist.component";
import {AddRecipeComponent} from "./addrecipe.component";
import {RecipedetailComponent} from "./../recipedetail/recipedetail.component";
import { RecipesService } from './recipes.service';

@Component({
	selector : '<app-recipe></app-recipe>',
	templateUrl : './recipe.component.html'
})

export class RecipeComponent implements OnInit{
	recipes;
	recipeSaved = false;
	showDetail = false;
	recipeDetail;
	constructor(private recipesService : RecipesService){

	}
	ngOnInit(){
		this.recipes = this.recipesService.getRecipesData();
	}
	getData($event){
		this.recipes = $event.recipes;
	}
	newRecipe(){
		this.recipeSaved = true;
		this.showDetail = false;
	}
	savedRecipe($event){
		this.recipeSaved = $event.recipeSaved;
	}
	showDetailView($event){
		this.showDetail = $event.data.showDetail;
		this.recipeDetail = $event.data.recipe;
		this.recipeSaved = !$event.data.showDetail;
	}
}