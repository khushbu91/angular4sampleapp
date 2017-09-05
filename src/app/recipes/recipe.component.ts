import {Component, OnInit} from "@angular/core";
import {RecipeListComponent} from "./recipelist.component";
import {AddRecipeComponent} from "./addrecipe.component";

@Component({
	selector : '<app-recipe></app-recipe>',
	templateUrl : './recipe.component.html'
})

export class RecipeComponent implements OnInit{
	ngOnInit(){}
}