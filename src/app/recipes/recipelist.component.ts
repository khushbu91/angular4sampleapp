import {Component,OnInit,Input,EventEmitter,Output} from '@angular/core';
import { RecipesService } from './recipes.service';

@Component({
	selector : "app-recipelist",
	templateUrl : "./recipelist.component.html"
})

export class RecipeListComponent implements OnInit{
	@Input('allRecipes') 
	recipes : Array<String>;
	recipeSaved= true;
	@Output() showDetail = new EventEmitter();
	ngOnInit(){
	
	}
	constructor(private recipesService:RecipesService){

	}
	showDetailView(recipe){
		this.recipesService.setDetailView(recipe);
		this.showDetail.emit({'data':{'showDetail' : true,'recipe':recipe}});
	}
}