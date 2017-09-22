import { Component, OnInit,Input,EventEmitter} from '@angular/core';
import { RecipesService } from './../recipes/recipes.service';
@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {
  
  @Input('recipeDetail')
  recipe;

  constructor(private recipesService :RecipesService) { }

  ngOnInit() {
  }
}
