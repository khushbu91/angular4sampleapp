import { Component, OnInit,Input,EventEmitter} from '@angular/core';
import { SimpleDropdownModule } from 'ng2-simple-dropdown';
import { RecipesService } from './../recipes/recipes.service';
import { Item } from 'ng2-simple-dropdown';
@Component({
  selector: 'app-recipedetail',
  templateUrl: './recipedetail.component.html',
  styleUrls: ['./recipedetail.component.css']
})
export class RecipedetailComponent implements OnInit {
  @Input('recipeDetail')
  recipe;
  userActions:Item[]=[];

  constructor(private recipesService :RecipesService) {
  this.userActions = [new Item('Edit','Edit'),
  						new Item('Delete','Delete')] }

  ngOnInit() {
  }
}
