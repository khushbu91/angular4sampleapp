import {Component,OnInit} from '@angular/core';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {ImageUrlValidator} from './../shared/imageurlvalidator.directive';
@Component({
	selector : "app-addrecipe",
	templateUrl : "./addrecipe.component.html"
})

export class AddRecipeComponent implements OnInit{
	recipeForm:FormGroup;
	ngOnInit(){}
	constructor(private fb:FormBuilder){
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
		console.log(recipe);
	}
}