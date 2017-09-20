import {Component,OnInit,Output,EventEmitter} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ImageUrlValidator} from './../shared/imageurlvalidator.directive';

import { RecipesService } from './recipes.service';

@Component({
	selector : "app-addrecipe",
	templateUrl : "./addrecipe.component.html"
})

export class AddRecipeComponent implements OnInit{
	recipeForm:FormGroup;
	isValid;
	@Output() recipes = new EventEmitter();
	@Output() savedRecipe = new EventEmitter();

	ngOnInit(){}
	constructor(private fb:FormBuilder,private recipesService :RecipesService){
		this.recipeForm =fb.group({
			'name' : [null,Validators.required],
			'imageUrl' :[null,Validators.required],
			'description' :[null,Validators.compose([Validators.required,Validators.minLength(30)])]
		})
	}

	addRecipe(recipe){
		this.recipeForm=recipe.name;
		this.recipeForm =recipe.imageUrl;
		this.recipeForm =recipe.description;
		this.recipesService.saveRecipesData(recipe);
		this.recipes.emit({'recipes':this.recipesService.getRecipesData()});
		this.savedRecipe.emit({'savedRecipe':false});


	}

	checkValid($event){
		this.isValid =$event.isCheck;
	}
}