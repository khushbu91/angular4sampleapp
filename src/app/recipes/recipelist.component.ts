import {Component,OnInit,Input,EventEmitter,Output} from '@angular/core';

@Component({
	selector : "app-recipelist",
	templateUrl : "./recipelist.component.html"
})

export class RecipeListComponent implements OnInit{
	@Input('allRecipes') 
	recipes : Array<String>;
	recipeSaved= true;
	ngOnInit(){
	
	}
}