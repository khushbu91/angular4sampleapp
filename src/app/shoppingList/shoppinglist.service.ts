import {Injectable} from '@angular/core';
import {ShoppingItem} from './../shoppingItem';

@Injectable()
 export class ShoppingListService{
 	savedItems : ShoppingItem[]=[];
 	setItems(item){
 		var data = this.getItems();
 		data.push(item);
 		localStorage.setItem("shoppingList",JSON.stringify(data));

 	}
 	getItems(){
 		return JSON.parse(localStorage.getItem("shoppingList"));
 	}
 }