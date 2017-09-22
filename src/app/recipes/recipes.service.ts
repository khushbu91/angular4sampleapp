import { Injectable } from '@angular/core';

@Injectable()

export class RecipesService{
		recipe;
		saveRecipesData(data){
			var existingRecipe = this.getRecipesData();
			existingRecipe.push(data);
			localStorage.setItem('recipes',JSON.stringify(existingRecipe));
		}

		getRecipesData(){
			var data = <any>[];
			data = localStorage.getItem("recipes");
			data = data ? JSON.parse(data) : [];
			return data;
		}
		setDetailView(recipe){
			this.recipe=recipe;
		}
		getDetailView(){
			return this.recipe;
		}
}