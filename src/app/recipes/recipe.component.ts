import {Component, OnInit} from "@angular/core";
import {RecipeListComponent} from "./recipelist.component";
import {AddRecipeComponent} from "./addrecipe.component";
import { RecipesService } from './recipes.service';

@Component({
	selector : '<app-recipe></app-recipe>',
	templateUrl : './recipe.component.html'
})

export class RecipeComponent implements OnInit{
	recipes;
	recipeSaved = false;
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
	}
	savedRecipe($event){
		this.recipeSaved = $event.recipeSaved;
	}
}